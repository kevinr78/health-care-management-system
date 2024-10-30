import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Login from "./pages/Registration/Login";
import UserSelection from "./pages/Registration/UserSelection";
import PatientProfileCreation from "./pages/Registration/patientProfileCreation";
import DoctorProfileCreation from "./pages/Registration/DoctorProfileCreation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      element: <p>User Home</p>,
      children: [
        {
          path: "/doctor/home",
          element: <p>Doctor Home</p>,
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "/patient",
      element: <p>Patient Home</p>,
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
