import type { RequestContext } from "@vercel/edge";

import { Hono } from "hono";
import { handle } from "hono/nextjs";

export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

export default handle(app);
