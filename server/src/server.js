import express from "express";
import routes from "./routes";
import cors from "cors";

export function App(port) {
  const app = express();

  app.use("/", routes);
  app.use(cors({
    origin: "http://localhost:19006",
  }));


  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  });
}
