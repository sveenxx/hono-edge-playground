import { geolocation } from "@vercel/edge";
import { Hono } from "hono";

export const api = new Hono();

api.get("/geo", (c) => {
  const { city, country, countryRegion, latitude, longitude, region } =
    geolocation(c.req);

  return c.jsonT({
    message: {
      city,
      country,
      countryRegion,
      latitude,
      longitude,
      region,
    },
  });
});
