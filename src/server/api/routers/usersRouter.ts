import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { getAllUsers, getSingleUser } from "@/services/users.service";

export const usersRouter = createTRPCRouter({
    getAllUsers: publicProcedure.query(async () => {
        const users = await getAllUsers();
        return users;
    }),
    getSingleUser: publicProcedure
        .input(
            z.object({
                userId: z.number(),
            })
        )
        .query(async ({ input }) => {
            const user = await getSingleUser(input.userId);
            return user;
        }),
});
