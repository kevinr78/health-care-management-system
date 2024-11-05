import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ErrorPage from "./pages/Error";
import Login from "./pages/Registration/Login";
import UserSelection from "./pages/Registration/UserSelection";
import PatientProfileCreation from "./pages/Registration/patientProfileCreation";
import DoctorProfileCreation from "./pages/Registration/DoctorProfileCreation";
import PageWithSideBar from "./components/Layout";
import PatientList from "./pages/Doctor/PatientList";
import Layout from "./components/Layout";
import IndividualPatient from "./pages/Doctor/IndividualPatient";

import { getPatientsList, getPatient } from "./utils/doctor";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserSelection />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register/patient",
      element: <PatientProfileCreation />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register/doctor",
      element: <DoctorProfileCreation />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/doctor",
      element: <Layout />,
      children: [
        {
          path: "/doctor/home",
          element: <p>Doctor Home</p>,
        },
        {
          path: "/doctor/patients",
          loader: getPatientsList,
          element: <PatientList />,
        },
        {
          path: "/doctor/:patientId",
          loader: getPatient,
          element: <IndividualPatient />,
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "/patient",
      element: <PageWithSideBar />,
      children: [
        {
          path: "/patient/home",
          element: <p>Patient Home</p>,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
