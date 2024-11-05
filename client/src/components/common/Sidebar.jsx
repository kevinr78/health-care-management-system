import React from "react";
import { useNavigate } from "react-router";

import BrandIcon from "../../assets/BrandIcon.svg";
import DashBoard from "../../assets/DashBoard.svg";
import Appointment from "../../assets/Appointment.svg";
import Users from "../../assets/Users.svg";
import LogOut from "../../assets/LogOut.svg";

export default function Sidebar() {
  const navigate = useNavigate();

  const userType = new URLSearchParams(window.location.search).get("type");
  const userId = new URLSearchParams(window.location.search).get("id");
  function handleClick(e) {
    const clickedItem = e.target.closest("li").dataset.name;
    navigate(`/${userType}/${clickedItem}?id=${userId}&type=${userType}`);
  }
  return (
    <aside className="w-1/6 bg-white flex flex-col justify-between p-4">
      <div className="brand flex items-center justify-center">
        <div className="brand-logo mr-4 ">
          <img src={BrandIcon} alt="App Icon" className="w-10" />
        </div>
        <div className="brand-title font-bold">HMS</div>
      </div>
      <div className="flex-1">
        <ul className="h-full mt-20" onClick={handleClick}>
          <li className="hover:bg-gray-200 h-16" data-name="dashboard">
            <div className="flex items-center hover:font-bold">
              <div className="sidebar-icon mr-2">
                <img src={DashBoard} className="w-10" alt="DashBoard Icon" />
              </div>
              <p className="sidebar-title ">DashBoard</p>
            </div>
          </li>
          <li className="h-16 hover:bg-gray-200" data-name="appointment">
            <div className="flex items-center hover:bg-gray-200 hover:font-bold ">
              <div className="sidebar-icon mr-2">
                <img src={Appointment} className="w-10" alt="DashBoard Icon" />
              </div>
              <p className="sidebar-title ">Appointment</p>
            </div>
          </li>
          <li className="h-16 hover:bg-gray-200 " data-name="patients">
            <div className="flex items-center hover:font-bold ">
              <div className="sidebar-icon mr-2">
                <img src={Users} className="w-10" alt="DashBoard Icon" />
              </div>
              <p className="sidebar-title ">Patients</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="logout">
        <div className="flex hover:font-bold">
          <img src={LogOut} className="w-10 mr-2" alt="Logout" />
          <button>Logout</button>
        </div>
      </div>
    </aside>
  );
}
