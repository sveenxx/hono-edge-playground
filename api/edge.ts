import { handle } from "hono/nextjs";
import { app } from "../src";

export const config = {
  runtime: "edge",
  regions: ["fra1"],
};

export default handle(app);
