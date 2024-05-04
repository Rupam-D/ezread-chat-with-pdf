import { Pinecone } from "@pinecone-database/pinecone";
export const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

// import { PineconeClient } from "@pinecone-database/pinecone";

// export const getPineconeClient = async () => {
//   const client = new PineconeClient();

//   await client.init({
//     apiKey: process.env.PINECONE_API_KEY!,
//     environment: "us-east1-gcp",
//   });

//   return client;
// };
// import { Pinecone } from "@pinecone-database/pinecone";

// export const pc = new Pinecone({
//   apiKey: process.env.PINECONE_API_KEY!,
// });

// const indexName = "chat-with-pdf-ezread";
// export const createIndex = async () => {
//   await pc.createIndex({
//     name: indexName,
//     dimension: 1536,
//     metric: "cosine",
//     spec: {
//       serverless: {
//         cloud: "aws",
//         region: "us-east-1",
//       },
//     },
//   });
// };

// import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";

// // export const getPineconeClient = () => {
// //   return new Pinecone({
// //     // environment: process.env.PINECONE_ENVIRONMENT!,
// //     apiKey: process.env.PINECONE_API_KEY!,
// //   });
// // };

// export const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
