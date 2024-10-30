import bcrypt from "bcryptjs";

import createAndReturnError from "../config/error.js";
import doctorModel from "../models/doctor.model.js";
import patientModel from "../models/patient.model.js";
import JWT from "../utils/JWT.js";
import { checkIfValueIsEmpty } from "./register.middleware.js";

const loginDoctor = async function (req, res, next) {
  let isErr = undefined;
  const { email, password, type } = req.body;
  console.log(req.body);

  if (checkIfValueIsEmpty(email, password, type)) {
    isErr = createAndReturnError(
      "Field Validation",
      "Please fill in all fields",
      400
    );
    return next(isErr);
  }
  const doctor = await doctorModel.findOne({ email });
  if (!doctor) {
    isErr = createAndReturnError(
      "Doctor not found",
      "The doctor does not exist in the system, check credentials or login again",
      404
    );

    return next(isErr);
  }

  const passCheck = await bcrypt.compare(password, doctor.password);
  if (!passCheck) {
    isErr = createAndReturnError(
      "Password check Error",
      "Password/Email is Incorrect",
      404
    );
    return next(isErr);
  }

  const token = JWT.create(doctor.id);

  return res
    .status(201)
    .json({ ok: true, message: "Login Successfully", data: doctor, token });
};

const loginPatient = async function (req, res, next) {
  let isErr = undefined;
  const { email, password, type } = req.body;
  console.log(req.body);

  if (checkIfValueIsEmpty(email, password, type)) {
    isErr = createAndReturnError(
      "Field Validation",
      "Please fill in all fields",
      400
    );
    return next(isErr);
  }
  const patient = await patientModel.findOne({ email });
  if (!patient) {
    isErr = createAndReturnError(
      "Patient not found",
      "The patient does not exist in the system, check credentials or sign-up",
      404
    );

    return next(isErr);
  }

  const passCheck = await bcrypt.compare(password, patient.password);
  if (!passCheck) {
    isErr = createAndReturnError(
      "Password check Error",
      "Password/Email is Incorrect",
      404
    );
    return next(isErr);
  }

  const token = JWT.create(patient.id);

  return res
    .status(201)
    .json({ ok: true, message: "Login Successfully", data: patient, token });
};

export { loginDoctor, loginPatient };
