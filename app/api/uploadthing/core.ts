import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { putUserFilesintoDb } from "@/actions/putUserFiles";
import { generateVectorEmbeddings } from "@/lib/generateEmbeddings";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const { getUser } = getKindeServerSession();
      const user = await getUser();

      // If you throw, the user will not be able to upload
      if (!user || !user.id) throw new UploadThingError("Unauthorized");
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      else {
        return { kindeId: user.id };
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // send to db

      // console.log("Upload complete for userId:", metadata.kindeId);

      const response = await putUserFilesintoDb(metadata.kindeId, file);

      // console.log("file url", file);
      // console.log(response, "core.ts");

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback

      console.log(response);

      // 1. Obtain pdf and generate embeddings
      await generateVectorEmbeddings({ fileUrl: file.url, fileKey: file.key });

      return { uploadedBy: metadata.kindeId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
