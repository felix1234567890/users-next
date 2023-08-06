import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { createContext } from "react";
import superjson from "superjson";
import { object, string } from "zod";

const t = initTRPC.create({
  transformer: superjson,
});
export type Context = inferAsyncReturnType<typeof createContext>;

export const appRouter = t.router({
  getUsers: t.procedure.query(({ ctx }:any) => {
    return ctx.db.user.findMany()  }),
    getUser: t.procedure.input(object({userId:string()})).query(({input, ctx}:any)=>{
        return ctx.db.user.findFirst({where:{id:input.userId}})
    })
});

export type AppRouter = typeof appRouter;

