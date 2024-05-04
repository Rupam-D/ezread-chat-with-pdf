import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { sendMessageValidator } from "@/validators/sendMessageValidator";
import { File } from "@/models/fileSchema";
import { Message } from "@/models/messageSchema";
import { pinecone } from "@/database/pineConedb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { openaiconfig } from "@/lib/openai";
import { OpenAIStream } from "ai";
import { openai } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText } from "ai";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    const { id: userid } = user;
    // access body
    const body = await req.json();
    // validate
    const { fileKey, message } = sendMessageValidator.parse(body);

    const fileres = await File.findOne({
      key: fileKey,
      user: userid,
    });

    if (!fileres) return new Response("Not-found", { status: 404 });

    await Message.create({
      text: message,
      user: userid,
      file: fileres._id,
      isUserMessage: true,
    });

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

    const result = await pcstore.similaritySearch(message, 5);
    const prevmsg = await Message.find({
      file: fileres._id,
      user: userid,
    })
      .sort({ createdAt: 1 })
      .limit(5);

    const formattedPreMsg = prevmsg.map((msg) => ({
      role: msg.isUserMessage ? ("user" as const) : ("assistant" as const),
      content: msg.text,
    }));

    const response = await openaiconfig.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0,
      stream: true,
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
  ${formattedPreMsg.map((message) => {
    if (message.role === "user") return `User: ${message.content}\n`;
    return `Assistant: ${message.content}\n`;
  })}
  
  \n----------------\n
  
  CONTEXT:
  ${result.map((r) => r.pageContent).join("\n\n")}
  
  USER INPUT: ${message}`,
        },
      ],
    });

    // streaming -> vercel ai sdk
    const stream = OpenAIStream(response, {
      onCompletion: async (msg) => {
        await Message.create({
          text: msg,
          user: userid,
          file: fileres._id,
          isUserMessage: false,
        });
      },
    });

    return new StreamingTextResponse(stream);
  } else {
    return new Response("Unauthorized", { status: 401 });
  }
};
