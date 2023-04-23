import { Hono } from "hono";
import { api } from "./routes";

export const app = new Hono();

app.route("/", api);
