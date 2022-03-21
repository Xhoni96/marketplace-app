import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import fjwt from "fastify-jwt";
import swagger from "fastify-swagger";
import { withRefResolver } from "fastify-zod";
import userRoutes from "./modules/user/user.route";
import productRoutes from "./modules/product/product.route";
import { userSchemas } from "./modules/user/user.schema";
import { productSchemas } from "./modules/product/product.schema";
import { version } from "../package.json";

const util = require("util");
const { pipeline } = require("stream");
const pump = util.promisify(pipeline);
import fs from "fs";

import fastifyMultipart, { MultipartFile } from "fastify-multipart";
// const kMultipart = Symbol("multipart");

// multer
// const fastify = require("fastify");
// import multer from "fastify-multer";
import path from "path";
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, "../public"));
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({ storage });

export const server = Fastify();

// server.register(multer.contentParser);

server.register(require("fastify-cors"));

server.register(require("fastify-static"), {
    root: path.join(__dirname, "../public"),
    prefix: "/public/", // optional: default '/'
});

async function onFile(part: MultipartFile) {
    //   for await (const part of parts) {
    await pump(part.file, fs.createWriteStream(`public/${part.filename}`));
    //         console.log(part, "request.files");
    //     }
}

server.register(fastifyMultipart /* , { attachFieldsToBody: true, onFile } */);

declare module "fastify" {
    export interface FastifyInstance {
        authenticate: any;
    }
}

declare module "fastify-jwt" {
    interface FastifyJWT {
        user: {
            id: number;
            email: string;
            name: string;
        };
    }
}

server.register(fjwt, {
    secret: "ndkandnan78duy9sau87dbndsa89u7dsy789adb",
});

server.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        await request.jwtVerify();
    } catch (e) {
        return reply.send(e);
    }
});

server.get("/healthcheck", async function () {
    return { status: "OK" };
});

async function main() {
    for (const schema of [...userSchemas, ...productSchemas]) {
        server.addSchema(schema);
    }

    server.register(
        swagger,
        withRefResolver({
            routePrefix: "/docs",
            exposeRoute: true,
            staticCSP: true,
            openapi: {
                info: {
                    title: "Fastify API",
                    description: "API for some products",
                    version,
                },
            },
        })
    );

    server.register(userRoutes, { prefix: "api/users" });
    server.register(productRoutes, { prefix: "api/products" });

    // server.addContentTypeParser("multipart", function (request, payload, done) {
    //     // request.raw[kMultipart] = true;
    //     console.log(request.body, "request");
    //     // console.log(payload, "payload");
    //     // imageParser(payload, function (err, body) {
    //     //   done(err, body)
    //     // })
    //     // done(null, request);
    // });

    try {
        await server.listen(3000, "0.0.0.0");

        console.log(`Server ready at http://localhost:3000`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();
