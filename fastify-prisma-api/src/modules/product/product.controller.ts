import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductInput } from "./product.schema";
import { createProduct, getProducts } from "./product.service";

const util = require("util");
const { pipeline } = require("stream");
const pump = util.promisify(pipeline);
import fs from "fs";

export async function createProductHandler(
    request: FastifyRequest<{
        Body: CreateProductInput;
    }>
) {
    // const parts = request.files();
    // for await (const part of parts) {
    //     await pump(part.file, fs.createWriteStream(`public/${part.filename}`));
    //     console.log(part, "request.files");
    // }

    const obj: CreateProductInput = {
        title: "",
        price: 0,
        category: "",
        description: "",
        location: {},
        images: [],
    };

    // const body = request.body;
    // const images = await request.files();
    // Array.isArray(images)
    //     ? images.forEach((image) => obj.images.push(image.filename))
    //     : obj.images.push(images.filename);

    // Object.keys(others).forEach((item) => {
    //     console.log(item, "item");

    //     obj[item] = body[item].value;
    // });

    const parts = request.parts();
    for await (const part of parts) {
        if (part.file) {
            // console.log(part.filename, "file");
            // await pump(part.file, fs.createWriteStream(part.filename));
        } else {
            console.log("here");
            obj.title = part.fields.title.value;
            obj.price = part.fields.price.value;
            obj.category = part.fields.category.value;
            obj.description = part.fields.description.value;
            obj.location = part.fields.location;
            obj.images.push(part.filename);
            console.log(part, "final object");
        }
    }

    console.log(obj, "final object");
    // for await (const part of images) {
    //     console.log(part.filename, "request.files");
    //     // console.log(part.filename, "request.files");
    // }
    // console.log(images, "images");
    // console.log(images, "request.body");

    // console.log(request.isMultipart(), "isMultipart");

    // const product = await createProduct({
    //     ...obj,
    //     ownerId: request.user.id,
    // });
    // return product;
    return null;
}

export async function getProductsHandler() {
    const products = await getProducts();

    return products;
}
