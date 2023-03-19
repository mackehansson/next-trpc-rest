import { createTRPCRouter } from "@/server/api/trpc";
import { cartRouter } from "./routers/cartRouter";
import { productRouter } from "./routers/productRouter";
import { usersRouter } from "./routers/usersRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    cart: cartRouter,
    product: productRouter,
    user: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
