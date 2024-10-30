import express from "express";
import cors from "cors";

import { initialize } from "./config/DB.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import appConfig from "./config/env.js";
import registerRouter from "./routes/register.route.js";
import loginRouter from "./routes/login.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Db initialize
initialize();

// Routes
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.use(errorMiddleware);

app.listen(appConfig.PORT, () => {
  console.log("Connected to server successfully");
});
