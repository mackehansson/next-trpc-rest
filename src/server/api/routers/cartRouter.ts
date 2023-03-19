import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import {
    getAllCarts,
    getSingleCart,
    getUserCarts,
} from "@/services/cart.service";

export const cartRouter = createTRPCRouter({
    getAllCarts: publicProcedure.query(async () => {
        const carts = await getAllCarts();
        return carts;
    }),
    getSingleCart: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        )
        .query(async ({ input }) => {
            const cart = await getSingleCart(input.id);
            return cart;
        }),
    getUserCarts: publicProcedure
        .input(
            z.object({
                userId: z.number(),
            })
        )
        .query(async ({ input }) => {
            const carts = await getUserCarts(input.userId);
            return carts;
        }),
});
