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
const Home = React.lazy(() => import("../pages/views/Home/Home"));
const Building = React.lazy(() => import("../pages/views/Building/Building"));
const Cheque = React.lazy(() => import("../pages/views/Cheque/Cheque"));
const Users = React.lazy(() => import("../pages/views/Users/Users"));
const Contract = React.lazy(() => import("../pages/views/Contract/Contract"));
const Lessor = React.lazy(() => import("../pages/views/Lessor/Lessor"));
const Owner = React.lazy(() => import("../pages/views/Owner/Owner"));
const Seller = React.lazy(() => import("../pages/views/Seller/Seller"));
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
        path: PATHS.ACCOUNT,
        element: <Account />,
      },
      {
        path: PATHS.CONTRACT,
        element: <Contract />,
      },
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.LESSOR,
        element: <Lessor />,
      },
      {
        path: PATHS.CHEQUE, element: <Cheque />
      },
      {
        path: PATHS.USER, element: <Users />
      },
      {
        path: PATHS.OWNER, element: <Owner />
      },
      {
        path: PATHS.SELLER,
        element: <Seller />,
      },
      {
        path: PATHS.BUILDING,
        element: <Building />,
      },
      {
        path: PATHS.USER,
        element: <Users />,
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
