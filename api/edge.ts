import { handle } from "hono/nextjs";
import { app } from "../src";

export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

export default handle(app);
