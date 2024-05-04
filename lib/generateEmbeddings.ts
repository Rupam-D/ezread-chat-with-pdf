import { PDFPageTypes } from "@/types/types";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { PineconeRecord } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import {
  Document,
  RecursiveCharacterTextSplitter,
} from "@pinecone-database/doc-splitter";
import { genEmbeddings } from "@/lib/openai-embeddings";
import md5 from "md5";
import { pinecone } from "@/database/pineConedb";
import { convertToAscii } from "./utils";
import { File } from "@/models/fileSchema";
import { dbConnect } from "@/database/dbConfig";

export const generateVectorEmbeddings = async ({
  fileUrl,
  fileKey,
}: {
  fileUrl: string;
  fileKey: string;
}) => {
  try {
    // 1. obtain the pdf
    const resFile = await fetch(fileUrl);

    const blob = await resFile.blob();

    // console.log(blob, "blob from gem");

    const loader = new PDFLoader(blob);

    // console.log(loader, "loader");
    // page level docs
    const pages = (await loader.load()) as PDFPageTypes[];
    // console.log(pages, "pages");

    // pc index
    const pineconeIndex = pinecone.Index("chat-with-pdf-ezread");

    // generate embeddings
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY!,
      model: "text-embedding-3-small",
    });

    // add to pinecone
    await PineconeStore.fromDocuments(pages, embeddings, {
      pineconeIndex,
      namespace: fileKey,
    });
    await dbConnect();
    const fileres = await File.findOneAndUpdate(
      { key: fileKey, url: fileUrl },
      { pineconeUploadStatus: "SUCCESS" }
    );

    // const query_result = await embeddings.embedQuery(pages[0].pageContent);
    // const query_result = await Promise.all(
    //   pages.flat().map((page) => embeddings.embedQuery(page.pageContent))
    // );
    console.log("hurray...");
  } catch (error) {
    console.log(error);
    await dbConnect();
    const fileres = await File.findOneAndUpdate(
      { key: fileKey, url: fileUrl },
      { pineconeUploadStatus: "FAILED" }
    );

    throw new Error("Error in file upload to pinecone");
  }
};

// const embeddedDocs = async (doc: Document) => {
//   try {
//     const embeddings = await genEmbeddings(doc.pageContent);
//     // vector id
//     const hash = md5(doc.pageContent);
//     console.log(embeddings, hash, "embeddedDocs");
//     return {
//       id: hash,
//       values: embeddings,
//       metadata: {
//         text: doc.metadata.text,
//         pageNumber: doc.metadata.pageNumber,
//       },
//     } as PineconeRecord;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const truncateStringByBytes = (str: string, bytes: number) => {
//   const enc = new TextEncoder();

//   console.log(
//     new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes)),
//     "new TextDecoder decode(enc.encode(str).slice(0, bytes))"
//   );
//   return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
// };

// const prepareDocument = async (page: PDFPageTypes) => {
//   let { pageContent, metadata } = page;
//   // replace new lone char with empty string
//   pageContent = pageContent.replace(/\n/g, "");
//   // split the docs
//   const splitter = new RecursiveCharacterTextSplitter();
//   const docs = await splitter.splitDocuments([
//     new Document({
//       pageContent,
//       metadata: {
//         pageNumber: metadata.loc.pageNumber,
//         text: truncateStringByBytes(pageContent, 36000),
//       },
//     }),
//   ]);
//   return docs;
// };
