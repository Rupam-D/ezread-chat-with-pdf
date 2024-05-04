// 04=> build trpc client

import { AppRouter } from "@/trpc";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
