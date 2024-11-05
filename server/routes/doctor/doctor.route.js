import { Router } from "express";
import {
  getPatients,
  getPatient,
} from "../../middlewares/doctor/Patients/patients.middleware.js";

const doctorRouter = Router();

doctorRouter.post("/getPatient", getPatients);
doctorRouter.get("/:patientId", getPatient);
export default doctorRouter;
