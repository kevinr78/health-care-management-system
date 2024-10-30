import bcrypt from "bcryptjs";

import createAndReturnError from "../config/error.js";
import doctorModel from "../models/doctor.model.js";
import patientModel from "../models/patient.model.js";
import JWT from "../utils/JWT.js";

const registerDoctor = async function (req, res, next) {
  let isErr = undefined;

  const { department, email, lastName, licenseNum, password, role, firstName } =
    req.body;

  isErr = checkIfValueIsEmpty(
    department,
    email,
    lastName,
    licenseNum,
    password,
    role,
    firstName
  );

  if (isErr) {
    throw createAndReturnError(
      "Doctor Fields validation",
      "Please Fill all fields",
      404
    );
  }

  const doesDocExist = await doctorModel.findOne({ email: email });
  if (doesDocExist) {
    throw createAndReturnError(
      "Doctor Exist Check",
      "Doctor already exist in system",
      404
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const doctorMdl = new doctorModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role,
    department,
    licenseNum,
  });

  try {
    const doctor = await doctorMdl.save();
    const token = JWT.create(doctor.id);
    return res.status(200).json({
      name: "Doctor Profile Creation",
      message: "Doctor Profile created successfully",
      data: doctor,
      token: token,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};

const registerPatient = async function (req, res, next) {
  let isErr;
  const {
    DOB,
    Height,
    allergies,
    blood_group,
    currentMedications,
    email,
    emergencyContactName,
    emergencyContactNumber,
    emergencyContactRelationship,
    firstName,
    gender,
    lastName,
    medicalHistory,
    password,
    weight,
  } = req.body;
  const splittedCurrentMedications = currentMedications.split(",");
  const splittedAllergies = allergies.split(",");
  const splittedMedicalHistory = medicalHistory.split(",");

  isErr = checkIfValueIsEmpty(
    DOB,
    Height,
    allergies,
    blood_group,
    currentMedications,
    email,
    emergencyContactName,
    emergencyContactNumber,
    emergencyContactRelationship,
    firstName,
    gender,
    lastName,
    medicalHistory,
    password,
    weight
  );

  const doesPatientExist = await patientModel.findOne({ email: email });
  if (doesPatientExist) {
    throw createAndReturnError(
      "Patient exist check",
      "Patient already exist, Please login",
      404
    );
  }

  if (isErr) {
    throw createAndReturnError(
      "Patient Fields validation",
      "Please Fill all fields",
      404
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const patientMdl = new patientModel({
    DOB,
    Height,
    allergies: splittedAllergies,
    blood_group,
    currentMedications: splittedCurrentMedications,
    email,
    emergencyContactName,
    emergencyContactNumber,
    emergencyContactRelationship,
    firstName,
    gender,
    lastName,
    medicalHistory: splittedMedicalHistory,
    password: hashedPassword,
    weight,
  });

  try {
    const patient = await patientMdl.save();
    const token = JWT.create(patient.id);

    return res.status(200).json({
      name: "Patient Profile Creation",
      message: "Patient Profile created successfully",
      token: token,
      data: patient,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};

export const checkIfValueIsEmpty = function (...args) {
  let flag = false;
  for (let arg in args) {
    if (arg === null || arg === undefined || arg === "") {
      flag = true;
    }
  }
  return flag;
};

export { registerDoctor, registerPatient };
