import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export const genEmbeddings = async (str: string) => {
  try {
    const res = await openai.createEmbedding({
      model: "text-embedding-3-small",
      input: str.replace(/\n/g, " "),
    });

    const result = await res.json();
    console.log(res, result, "open-ai gen embeddings func");
    return result.data[0].embeddings as number[];
  } catch (error) {
    console.log(error, "gen-embeddings");
    throw new Error("Error from OpenAi to generate embeddings");
  }
};
