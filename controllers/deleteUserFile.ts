import { dbConnect } from "@/database/dbConfig";
import { File } from "@/models/fileSchema";
import { UserType } from "@/types/types";

export const deleteUserFile = async ({
  ctx,
  input,
}: {
  ctx: UserType;
  input: any;
}) => {
  const { userId } = ctx;
  const { fileId } = input;

  await dbConnect();
  await File.findOneAndDelete({ user: userId, _id: fileId });
  return { status: 200, msg: "File Deleted" };
};
