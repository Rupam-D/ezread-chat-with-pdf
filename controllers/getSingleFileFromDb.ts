import { dbConnect } from "@/database/dbConfig";
import { File } from "@/models/fileSchema";
import { FileType, UserType } from "@/types/types";
import { TRPCError } from "@trpc/server";

export const getSingleFileFromDb = async ({
  ctx,
  input,
}: {
  ctx: UserType;
  input: any;
}) => {
  const { userId } = ctx;
  const { fileKey } = input;
  await dbConnect();
  const res: FileType | null = await File.findOne({
    key: fileKey,
    user: userId,
  });
  if (!res) {
    throw new TRPCError({ code: "NOT_FOUND" });
  } else if (res) {
    return { status: 200, res };
  }
};
