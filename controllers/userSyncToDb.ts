import { dbConnect } from "@/database/dbConfig";
import { User } from "@/models/userSchema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export const userSyncToDb = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) return { status: 401, msg: "Unauthorized!" };
  await dbConnect();
  const { id, email, given_name, family_name } = user;
  const dbUser = await User.findById(id);
  if (!dbUser) {
    // sync to db
    const dbUser = await User.create({
      _id: id,
      email,
      name: given_name + " " + family_name,
    });
    return { status: 200, dbUser };
  }
  return { status: 200, dbUser };
};
