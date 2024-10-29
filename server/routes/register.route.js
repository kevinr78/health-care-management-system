import { Router } from "express";
import {
  registerDoctor,
  registerPatient,
} from "../middlewares/register.middleware.js";

const registerRouter = Router();

registerRouter.post("/patient", registerPatient);
registerRouter.post("/doctor", registerDoctor);

export default registerRouter;
