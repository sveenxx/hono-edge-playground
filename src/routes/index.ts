import { geolocation } from "@vercel/edge";
import { Hono } from "hono";

export const api = new Hono();

api.get("/geo", (c) => {
  const { city } = geolocation(c.req);

  return c.jsonT({
    message: `Your city is ${city}`,
  });
});
