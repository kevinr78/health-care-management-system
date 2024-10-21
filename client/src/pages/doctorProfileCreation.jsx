import React from "react";
import InputWithLabel from "../components/common/Input";

export default function PatientProfileCreation() {
  return (
    <main className="w-full">
      <h1> Patient Profile Creation </h1>
      <form method="POST">
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
          <div className="flex items-center">
            <InputWithLabel
              label={"Date of Birth"}
              type={"date"}
              name={"DOB"}
              id={"DOB"}
              required={true}
            />
            <div className="">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="professional_information">
          <header>Professional Information</header>
          <div className="flex">
            <InputWithLabel
              label={"Role"}
              type={"text"}
              placeholder={"Role"}
              required={true}
              name={"role"}
              id={"role"}
            />
            <InputWithLabel
              label={"Specialization"}
              type={"text"}
              placeholder={"Specialization"}
              required={true}
              name={"specialization"}
              id={"specialization"}
            />
          </div>
          <div className="flex">
            <InputWithLabel
              label={"License Number"}
              type={"text"}
              placeholder={"License Number"}
              required={true}
              name={"licenseNum"}
              id={"licenseNum"}
            />
            <InputWithLabel
              label={"Department"}
              type={"text"}
              placeholder={"Department"}
              required={true}
              name={"department"}
              id={"department"}
            />
          </div>
        </div>
      </form>
    </main>
  );
}
