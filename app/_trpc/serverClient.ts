/*
 05 =>for calling trpc in server side
 https://trpc.io/docs/server/server-side-calls#create-caller
*/

import { appRouter } from "@/trpc";
import { createCallerFactory } from "@/trpc/trpc";

// 1. create a caller-function for your router
const createCaller = createCallerFactory(appRouter);
// 2. create a caller using your `Context`
export const trpcServer = createCaller({});
