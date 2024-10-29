import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  DOB: {
    type: Date,
    required: true,
  },
  Height: {
    type: Number,
    required: true,
  },
  allergies: [],
  blood_group: {
    type: String,
    required: true,
  },
  currentMedications: [],
  email: {
    type: String,
    required: true,
  },
  emergencyContactName: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  emergencyContactRelationship: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  medicalHistory: [],
  password: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Patient", PatientSchema);
