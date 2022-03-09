import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const productInput = {
    title: z.string(),
    price: z.number(),
    description: z.string().optional(),
    images: z.array(z.string()),
    category: z.string(),
};

const productGenerated = {
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
};

const createProductSchema = z.object({
    ...productInput,
});

const productResponseSchema = z.object({
    ...productInput,
    ...productGenerated,
});

const productsResponseSchema = z.array(productResponseSchema);

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const { schemas: productSchemas, $ref } = buildJsonSchemas({
    createProductSchema,
    productResponseSchema,
    productsResponseSchema,
});
