import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputWithLabel from "../../components/common/Input";
import API_REQUEST from "../../utils/API";
import { toast } from "react-toastify";

export default function DoctorProfileCreation() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsProcessing(true);
    let form = document.getElementById("doctor-profile-form");
    let formData = new FormData(form);
    const request = new API_REQUEST(
      "POST",
      "/register/doctor",
      Object.fromEntries(formData)
    );
    const response = await request.send();

    if (!response.ok) {
      setIsProcessing(false);
      toast.error(response.message);
      return;
    }
    localStorage.setItem(`token`, response.token);
    navigate(`/doctor/home?id=${response.data._id}&type=doctor`);
  }

  return (
    <main className="w-full p-4">
      <h1 className="font-bold text-2xl underline mb-2">
        Doctor Profile Creation{" "}
      </h1>
      <form method="POST" id="doctor-profile-form">
        <div className="personal_information w-full">
          <header>Personal Information</header>
          <div className="flex ">
            <InputWithLabel
              label={"First Name"}
              type={"text"}
              placeholder={"First Name"}
              required={true}
              name={"firstName"}
              id={"firstName"}
            />
            <InputWithLabel
              label={"Last Name"}
              type={"text"}
              placeholder={"Last Name"}
              required={true}
              id={"lastName"}
              name={"lastName"}
            />
          </div>
          <div className="flex items-center mt-4">
            <InputWithLabel
              label={"Email"}
              type={"email"}
              placeholder={"Email"}
              required={true}
              id={"email"}
              name={"email"}
            />
            <InputWithLabel
              label={"Password"}
              type={"password"}
              placeholder={"passowrd"}
              required={true}
              id={"password"}
              name={"password"}
            />
          </div>
        </div>
        <div className="professional_information">
          <header>Professional Information</header>
          <div className="flex mb-4">
            <select
              className="select select-bordered w-full relative top-6"
              name="role"
            >
              <option disabled selected>
                Role
              </option>
              <option>General Physician</option>
              <option>Surgeon</option>
              <option>Psychiatrists</option>
              <option>Health care administrators</option>
            </select>
          </div>
          <div className="flex mt-4">
            <InputWithLabel
              label={"License Number"}
              type={"text"}
              placeholder={"License Number"}
              required={true}
              name={"licenseNum"}
              id={"licenseNum"}
            />
            <select
              className="select select-bordered w-full relative top-6"
              name="department"
            >
              <option disabled selected>
                Department
              </option>
              <option>Pediatrics</option>
              <option>Family Medicine</option>
              <option>Dermatology</option>
              <option>UroLogy</option>
              <option>Cardiology</option>
              <option>Ophthalmology</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={handleSubmit} className="btn btn-primary mt-4 mr-4">
            Submit Information
          </button>
          {isProcessing && (
            <span className="loading loading-spinner loading-lg text-accent"></span>
          )}
        </div>
      </form>
    </main>
  );
}
