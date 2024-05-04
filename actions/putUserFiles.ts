"use server";

import { dbConnect } from "@/database/dbConfig";
import { File } from "@/models/fileSchema";
import { User } from "@/models/userSchema";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const putUserFilesintoDb = async (kindeId: string, file: any) => {
  const { url, key, name } = file;
  console.log(file, name, "putfile action");
  await dbConnect();
  const fileDb = await File.findOne({ key, user: kindeId });
  if (!fileDb) {
    // always
    await File.create({
      fileName: name,
      url,
      key,
      user: kindeId,
      pineconeUploadStatus: "PROCESSING",
    });
    return { status: 201, body: "File created to Database" };
  } else {
    // contradict files
    return { status: 406, body: "File present to Database already" };
  }
};
