import { openai } from "@ai-sdk/openai";
import { OpenAIStream, StreamingTextResponse, streamText } from "ai";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { pinecone } from "@/database/pineConedb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { File } from "@/models/fileSchema";
import { Message } from "@/models/messageSchema";
import { Message as MessageTypes } from "ai/react";
import { openaiconfig } from "@/lib/openai";
import { dbConnect } from "@/database/dbConfig";
import { MessageBackendTypes } from "@/types/types";

export async function POST(req: Request) {
  console.log("api/chat");
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return new Response("Unauthorized", { status: 401 });

  // get user
  const { id: userid } = user;
  // all msgs
  const { messages, fileKey } = await req.json();
  console.log(messages);
  // query
  const query = messages[messages.length - 1].content;
  console.log(query, fileKey, "qry");
  // await dbConnect();
  // get file
  // const fileres = await File.findOne({
  //   key: fileKey,
  //   user: userid,
  // });

  // if (!fileres) return new Response("Not-found", { status: 404 });
  // console.log(fileres, "api/chat");
  // await dbConnect();
  // // create msg
  // await Message.create({
  //   text: query,
  //   user: userid,
  //   file: fileres._id,
  //   isUserMessage: true,
  // });

  // to get ans
  // 1. vecorize ques
  // generate embeddings
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY!,
    model: "text-embedding-3-small",
  });

  //2. search pinecone
  // pc index
  const pineconeIndex = pinecone.Index("chat-with-pdf-ezread");
  const pcstore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: fileKey,
  });

  // pc result
  const resultfromPc = await pcstore.similaritySearch(query, 5);
  console.log(resultfromPc, "result from pc");
  // await dbConnect();
  // // prev msg
  // const prevmsg = await Message.find({
  //   file: fileres._id,
  //   user: userid,
  // })
  //   .sort({ createdAt: 1 })
  //   .limit(5);

  // if (messages.length > 0) {
  const formattedPreMsg = messages.map((msg: MessageBackendTypes) => ({
    role: msg.role === "user" ? "user" : "assistant",
    content: msg.content,
  }));
  // };
  // prompt

  // const result = await streamText({
  //   model: openai("gpt-3.5-turbo"),
  //   messages: [
  //     prompt,
  //     ...messages.filter((msg: MessageTypes) => msg.role === "user"),
  //   ],
  // });

  const response = await openaiconfig.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    stream: true,
    // messages: [
    //   prompt,
    //   ...messages.filter((message: MessageTypes) => message.role === "user"),
    // ],
    messages: [
      {
        role: "system",
        content:
          "Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.",
      },
      {
        role: "user",
        content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.
        
  \n----------------\n
  
  PREVIOUS CONVERSATION:
  ${formattedPreMsg.map((message: MessageBackendTypes) => {
    if (message.role === "user") return `User: ${message.content}\n`;
    return `Assistant: ${message.content}\n`;
  })}
  
  \n----------------\n
  
  
  CONTEXT:
  ${resultfromPc.map((r) => r.pageContent).join("\n\n")}
  
  USER INPUT: ${query}`,
      },
    ],
  });

  // streaming -> vercel ai sdk
  const stream = OpenAIStream(response, {
    onCompletion: async (msg) => {
      // await dbConnect();
      // await Message.create({
      //   text: msg,
      //   user: userid,
      //   file: fileres._id,
      //   isUserMessage: false,
      // });
    },
  });
  return new StreamingTextResponse(stream);
  // return new StreamingTextResponse(result.toAIStream());
}
