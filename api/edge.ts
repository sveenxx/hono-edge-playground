import { handle } from "hono/nextjs";
import { app } from "../src";

export const config = {
  runtime: "edge",
  regions: ["bru1"],
};

export default handle(app);
