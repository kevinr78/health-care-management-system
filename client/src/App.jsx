import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Login from "./pages/Login";
import UserSelection from "./pages/UserSelection";
import PatientProfileCreation from "./pages/patientProfileCreation";
import DoctorProfileCreation from "./pages/doctorProfileCreation";
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
      path: "/user/home",
      element: <p>User Home</p>,
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
