import {
    getAllCategories,
    getAllProducts,
    getProductsInCategory,
    getSingleProduct,
} from "@/services/products.service";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const productRouter = createTRPCRouter({
    getAllProducts: publicProcedure
        .input(
            z.object({
                limit: z.string().optional(),
                sort: z.enum(["asc", "desc"]).optional(),
            })
        )
        .query(async ({ input }) => {
            const products = await getAllProducts({
                limit: input.limit,
                sort: input.sort,
            });
            return products;
        }),
    getSingleProduct: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        )
        .query(async ({ input }) => {
            const product = await getSingleProduct(input.id);
            return product;
        }),
    getAllCategories: publicProcedure.query(async () => {
        const categories = await getAllCategories();
        return categories;
    }),
    getProductsInCategory: publicProcedure
        .input(
            z.object({
                category: z.string(),
            })
        )
        .query(async ({ input }) => {
            const products = await getProductsInCategory(input.category);
            return products;
        }),
});
