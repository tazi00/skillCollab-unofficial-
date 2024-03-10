import { Navigate, createBrowserRouter } from "react-router-dom";
import { Applayout, AuthLayout, ProtectedLayout } from "../Layout";
import { ForgotPass, Login, Register, Verify } from "../Pages/AuthPages";
import { Home } from "../Pages/AppPages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "forgot",
        element: <ForgotPass />,
      },
    ],
  },
  {
    path: "/home",
    element: <ProtectedLayout />,
    children: [
      {
        path: "",
        element: <Applayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          //   {
          //     path: "/profile",
          //     element: <Profile />,
          //   },
          //   {
          //     path: "/group/:id",
          //     element: <GroupDetail />,
          //   },
          //   {
          //     path: "forgot",
          //     element: <ForgotPass />,
          //   },
        ],
      },
    ],
  },
]);
