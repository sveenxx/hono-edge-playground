import type { RequestContext } from "@vercel/edge";

import { Hono } from "hono";

export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

const app = new Hono();

export default async (req: Request, ctx: RequestContext) => {
  app.get("/", (c) => c.text("Hello Fastly!"));
  app.fire();
};
