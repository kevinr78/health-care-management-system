import { Router } from "express";
import { loginDoctor, loginPatient } from "../middlewares/login.middleware.js";
const loginRouter = Router();

loginRouter.post("/patient", loginPatient);
loginRouter.post("/doctor", loginDoctor);

export default loginRouter;
