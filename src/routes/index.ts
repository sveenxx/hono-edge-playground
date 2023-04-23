import { geolocation } from "@vercel/edge";
import { Hono } from "hono";

export const api = new Hono();

api.get("/geo", (c) => {
  const location = geolocation(c.req);

  return c.json({
    data: location,
  });
});

api.get("/hello", (c) => {
  return c.jsonT({
    message: `Hello, ${c.req.headers.get("host")}`,
  });
});
