import createAndReturnError from "../../../config/error.js";
import doctorModel from "../../../models/doctor.model.js";
import patientModel from "../../../models/patient.model.js";
import JWT from "../../../utils/JWT.js";
import { checkIfValueIsEmpty } from "../../register.middleware.js";

const getPatients = async function (req, res, next) {
  let isErr;
  const { doc_id } = req.body;
  if (checkIfValueIsEmpty(doc_id)) {
    isErr = createAndReturnError(
      " Doctor Id Error",
      "Doctor Id not available",
      400
    );
    return next(isErr);
  }

  const doctor = await doctorModel.findById(doc_id);
  if (!doctor) {
    isErr = createAndReturnError(
      "Incorrect Doctor Id",
      "Doctor Not registered with System",
      404
    );
    return next(isErr);
  }

  const doctorPatients = await patientModel
    .find()
    .select("firstName lastName age blood_group gender DOB email _id ");
  if (!doctorPatients) {
    isErr = createAndReturnError(
      "No Patients",
      "No Patients registered with System",
      404
    );
    return next(isErr);
  }

  return res.status(201).json({
    ok: true,
    message: "Patients List",
    name: "Patients List",
    data: doctorPatients,
  });
};

const getPatient = async function (req, res, next) {
  const { patientId } = req.params;
  const patient = await patientModel.find();
  if (!patient) {
    isErr = createAndReturnError(
      "Patient Not Found",
      "No Patients registered with System",
      404
    );
    return next(isErr);
  }

  return res.status(201).json({
    ok: true,
    message: "Patients List",
    name: "Patients List",
    data: patient,
  });
};

export { getPatients, getPatient };
