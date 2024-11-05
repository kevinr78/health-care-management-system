import { Outlet } from "react-router";
import Sidebar from "./common/Sidebar";
import Notification from "../assets/Notification.svg";

export default function Layout() {
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      <div className="content flex-1 bg-sky-50">
        <header className="flex p-4 justify-between">
          <div className="current-page">
            <p className="text-2xl font-bold">Patient</p>
          </div>
          <div className="profile-details flex">
            <div className="notifications">
              <img src={Notification} alt="Notification" className="w-8" />
            </div>
            <div className="profile flex items-center">
              <div className="avatar placeholder mr-2">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">UI</span>
                </div>
              </div>
              <p>Kevin</p>
            </div>
          </div>
        </header>
        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </main>
  );
}
