import { App } from "./server";

const { PORT = 4242 } = process.env;
App(PORT);
