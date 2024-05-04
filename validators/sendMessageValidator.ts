import { z } from "zod";
export const sendMessageValidator = z.object({
  fileKey: z.string(),
  message: z.string(),
});
