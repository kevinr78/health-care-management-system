import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Login from "./pages/Login";
import UserSelection from "./pages/UserSelection";
import PatientProfileCreation from "./pages/patientProfileCreation";
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
      path: "/user/home",
      element: <p>User Home</p>,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
