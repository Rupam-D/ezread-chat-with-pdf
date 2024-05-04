import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { ChangeEvent } from "react";

export interface UserType {
  userId: string;
  user: KindeUser;
}
export interface FileType {
  _id: string;
  fileName: string;
  url: string;
  key: string;
  pineconeUploadStatus: string;
  user: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface ChatContextTypes {
  msg: string;
  sendMsg: () => void;
  isLoading: boolean;
  handleInputChanged: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface PDFPageTypes {
  pageContent: string;
  metadata: {
    loc: {
      pageNumber: number;
    };
  };
}

export interface MessageBackendTypes {
  role: string;
  content: string;
}
