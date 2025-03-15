import Layout from "@/components/layout/Layout";
import PATHS from "@/data/paths";
import Account from "@/pages/views/Account/Account";
import React from "react";
import { Navigate } from "react-router-dom";
// const Layout = React.lazy(() => import("@/components/layout/Layout"));
// const SignPagesLayout = React.lazy(() =>
//   import("@/components/signPagesLayout/SignPagesLayout")
// );

/************************************** General **************************************/
const Home = React.lazy(() => import("../pages/views/Home"));
// const Profile = React.lazy(() => import("./profile/Profile"));
// const ChangePassword = React.lazy(() => import("./profile/ChangePassword"));
/************************************** Authentication **************************************/
// const Login = React.lazy(() => import("./auth/Login"));
// const ForgotPassword = React.lazy(() => import("./auth/ForgotPassword"));
// const ResetPassword = React.lazy(() => import("./auth/ResetPassword"));
/************************************** Announcements **************************************/
// const AllAnnouncements = React.lazy(() =>
//   import("./AllAnnouncements")
// );

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      /************************************** General **************************************/
      {
        path: PATHS.ACCOUNT, element: <Account />
      },

      /************************************** Announcements **************************************/
      /************************************** Error **************************************/
      {
        path: "*",
        element: <Navigate to={PATHS.HOME} />,
      },
    ],
  },
  /************************************** Authentication **************************************/
  // {
  //   path: "/",
  //   element: <SignPagesLayout />,
  //   children: [
  //     {
  //       path: PATHS.LOGIN,
  //       element: <Login />,
  //     },
  //     {
  //       path: PATHS.FORGOT_PASSWORD,
  //       element: <ForgotPassword />,
  //     },
  //     {
  //       path: PATHS.RESET_PASSWORD,
  //       element: <ResetPassword />,
  //     },
  //   ],
  // },
];

export default routes;
