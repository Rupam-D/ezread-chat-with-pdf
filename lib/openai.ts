import OpenAI from "openai";

export const openaiconfig = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
