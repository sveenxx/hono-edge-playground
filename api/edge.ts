import type { RequestContext } from "@vercel/edge";

import { Hono } from "hono";

export const config = {
  runtime: "edge",
};

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
