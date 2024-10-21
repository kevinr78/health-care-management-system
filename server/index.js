import express from "express";
import cors from "cors";

import { initialize } from "./config/DB.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import appConfig from "./config/env.js";

const app = express();

app.use(express.json());
app.use(cors());

// Db initialize
initialize();

app.use(errorMiddleware);

app.listen(appConfig.PORT, () => {
  console.log("Connected to server successfully");
});
