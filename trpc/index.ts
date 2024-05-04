// all trpc routes =>02
// https://trpc.io/docs/client/nextjs/setup
import { z } from "zod";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { userSyncToDb } from "@/controllers/userSyncToDb";
import { deleteUserFile } from "@/controllers/deleteUserFile";

import { getSingleFileFromDb } from "@/controllers/getSingleFileFromDb";
import { getAllUserFiles } from "@/controllers/getUserFiles";

import { dbConnect } from "@/database/dbConfig";
import { File } from "@/models/fileSchema";
import { UserType } from "@/types/types";
import { getFilePinconeStatus } from "@/controllers/getFilePineconeStatus";

export const appRouter = router({
  // endpoints
  test: publicProcedure.query(() => {
    console.log("iam trpc");
    return {
      msg: "hello world",
    };
  }),

  //1
  syncToDb: publicProcedure.query(userSyncToDb),

  //2
  getUserFiles: privateProcedure.query(getAllUserFiles),

  // 3
  deleteUserFile: privateProcedure
    .input(
      z.object({
        fileId: z.string(),
      })
    )
    .mutation(deleteUserFile),

  // 4
  getSingleFile: privateProcedure
    .input(
      z.object({
        fileKey: z.string(),
      })
    )
    .mutation(getSingleFileFromDb),

  // 5
  getPineconeStatus: privateProcedure
    .input(
      z.object({
        fileKey: z.string(),
      })
    )
    .query(getFilePinconeStatus),
});

// export type definition of API
export type AppRouter = typeof appRouter;
