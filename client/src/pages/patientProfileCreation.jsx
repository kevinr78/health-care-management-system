import React from "react";
import InputWithLabel from "../components/common/Input";

export default function PatientProfileCreation() {
  function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("patient-profile-form");
    let formData = new FormData(form);
    console.log(Object.fromEntries(formData));
  }

  return (
    <main className="w-full p-4">
      <h1 className="font-bold text-2xl underline mb-2">
        Patient Profile Creation{" "}
      </h1>
      <form method="POST" id="patient-profile-form">
        <div className="personal_information ">
          <header className="font-bold text-2xl mb-4">
            Personal Information
          </header>
          <div className="flex justify-evenly mb-4">
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
          <div className="flex justify-evenly ">
            <InputWithLabel
              label={"Date of Birth"}
              type={"date"}
              name={"DOB"}
              id={"DOB"}
              required={true}
            />
            <InputWithLabel
              label={"Age"}
              type={"number"}
              name={"age"}
              id={"age  "}
              required={true}
            />

            <select className="select select-bordered w-full relative top-6">
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className="divider">OR</div>
        <div className="emergency_contact_information">
          <header className="font-bold text-xl mb-4">
            Emergency Contact Information
          </header>
          <div className="flex justify-evenly">
            <InputWithLabel
              label={"Emergency Contact Name"}
              type={"text"}
              placeholder={"Emergency Contact Name"}
              required={true}
              name={"emergencyContactName"}
              id={"emergencyContactName"}
            />
            <InputWithLabel
              label={"Relationship"}
              type={"text"}
              placeholder={"Relationship"}
              required={true}
              name={"emergencyContactRelationship"}
              id={"emergencyContactRelationship"}
            />
            <InputWithLabel
              label={"Phone Number"}
              type={"text"}
              placeholder={"Phone Number"}
              required={true}
              name={"emergencyContactNumber"}
              id={"emergencyContactNumber"}
            />
          </div>
        </div>
        <div className="divider">OR</div>
        <div className="medical_history_information">
          <header className="font-bold text-xl mb-4">
            Medical History Information
          </header>
          <div className="flex flex-col justify-evenly">
            <div className="flex mb-4">
              <div
                className="tooltip w-full mr-2"
                data-tip="Enter Comma separated Values (',')"
              >
                <InputWithLabel
                  label={"Medical History"}
                  type={"textarea"}
                  required={true}
                  name={"medicalHistory"}
                  id={"medicalHistory"}
                />
              </div>
              <div
                className="tooltip w-full mr-2"
                data-tip="Enter Comma separated Values (',')"
              >
                <InputWithLabel
                  label={"Current Medications"}
                  type={"textarea"}
                  required={true}
                  name={"currentMedications"}
                  id={"currentMedications"}
                />
              </div>
              <div
                className="tooltip w-full mr-2"
                data-tip="Enter Comma separated Values (',')"
              >
                <InputWithLabel
                  label={" Allergies"}
                  type={"text"}
                  placeholder={"Phone Number"}
                  required={true}
                  name={"allergies"}
                  id={"allergies"}
                />
              </div>
            </div>
            <div className="flex justify-evenly mb-4">
              <InputWithLabel
                label={"Blood Group"}
                type={"text"}
                placeholder={"Blood Group"}
                required={true}
                name={"bloodGroup"}
                id={"bloodGroup"}
              />
              <InputWithLabel
                label={"Height"}
                type={"number"}
                placeholder={"Height (In Cm)"}
                required={true}
                name={"Height"}
                id={"Height"}
              />
              <InputWithLabel
                label={"Weight"}
                type={"number"}
                placeholder={"Weight (In Kg)"}
                required={true}
                name={"weight"}
                id={"weight"}
              />
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} className="btn btn-primary">
          Submit Information
        </button>
      </form>
    </main>
  );
}
