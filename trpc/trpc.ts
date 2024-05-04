// trpc instance =>01
// https://trpc.io/docs/client/nextjs/setup
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create();
const middleware = t.middleware;
// trpc middlewares
const isAuth = middleware(async (path) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log(user, "middlewaretrpc");
  if (!user || !user.id) throw new TRPCError({ code: "UNAUTHORIZED" });

  return path.next({
    // ctx object can be accesed via path where this middleware is used

    ctx: {
      userId: user.id,
      user,
    },
  });
});

// Base router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
export const privateProcedure = t.procedure.use(isAuth);
