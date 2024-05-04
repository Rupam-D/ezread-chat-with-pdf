import { dbConnect } from "@/database/dbConfig";
import { File } from "@/models/fileSchema";
import { FileType, UserType } from "@/types/types";
import { TRPCError } from "@trpc/server";

export const getFilePinconeStatus = async ({
  ctx,
  input,
}: {
  ctx: UserType;
  input: any;
}) => {
  const { userId } = ctx;
  const { fileKey } = input;
  await dbConnect();
  const resFile: FileType | null = await File.findOne({
    user: userId,
    key: fileKey,
  });

  if (!resFile) {
    throw new TRPCError({ code: "NOT_FOUND" });
  }
  return { fileStatus: resFile.pineconeUploadStatus };
};
