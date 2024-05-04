"use server";

import { dbConnect } from "@/database/dbConfig";
import { File } from "@/models/fileSchema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

export const getPdf = async (fileKey: string) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  await dbConnect();
  const pdfFile = await File.findOne({ key: fileKey, user: user!.id });
  // notFound() give 04 error
  if (!pdfFile) notFound();
  return { status: 200, fileUrl: pdfFile.url, user: pdfFile.user };
};
