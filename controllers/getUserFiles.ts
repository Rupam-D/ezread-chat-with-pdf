import { dbConnect } from "@/database/dbConfig";
import { File } from "@/models/fileSchema";
import { UserType } from "@/types/types";

export const getAllUserFiles = async ({ ctx }: { ctx: UserType }) => {
  const { userId } = ctx;
  // console.log(ctx, "ctx1");
  await dbConnect();
  const files = await File.find({ user: userId });

  return { status: 200, files };
};
