import type { FastifyCorsOptions } from "@fastify/cors";
import fp from "fastify-plugin";

import cors from "@fastify/cors";

export default fp<FastifyCorsOptions>(async (fastify) => {
  fastify.register(cors, {
    origin: [
      "http://localhost:4200",
      "http://localhost:8100",
      "https://localhost",
      "capacitor://localhost",
      "ionic://localhost",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  });
});
