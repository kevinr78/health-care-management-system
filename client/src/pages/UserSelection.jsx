import React from "react";
import doctor from "../assets/doctor.svg";
import patient from "../assets/patient.svg";
import CardWithImgOverlay from "../components/common/CardWithImgOverlay";
import { useNavigate } from "react-router";

export default function UserSelection() {
  const navigate = useNavigate();
  return (
    <div className=" h-screen flex justify-around items-center ">
      <CardWithImgOverlay
        imgSrc={doctor}
        title={"Doctor"}
        description={"Click here to login as Doctor"}
        click={() => {
          navigate("/login?type=doctor");
        }}
      />
      <CardWithImgOverlay
        imgSrc={patient}
        title={"Patient"}
        description={"Click here to login as Patient"}
        click={() => {
          navigate("/login?type=patient");
        }}
      />
    </div>
  );
}
