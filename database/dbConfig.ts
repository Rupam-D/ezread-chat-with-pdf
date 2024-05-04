import mongoose from "mongoose";

export const dbConnect = async () => {
  mongoose
    .connect(process.env.DB_URI!)
    .then(() => console.log("Database connection successfull"))
    .catch((err: any) => console.log(`Db connection error ${err}`));
};
