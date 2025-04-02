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
const Shop = React.lazy(() => import("@/pages/views/Shop/Shop"));
const Villa = React.lazy(() => import("@/pages/views/villa/Villa"));
const Land = React.lazy(() => import("@/pages/views/Land/Land"));
const CostCenter = React.lazy(() =>
  import("../pages/views/CostCenter/CostCenter")
);
const Country = React.lazy(() => import("../pages/views/Country/Country"));
const Apartment = React.lazy(() => import("../pages/views/Apartment/Apartment"));
const Bank = React.lazy(() => import("../pages/views/Bank/Bank"));
const Parking = React.lazy(() => import("../pages/views/Parking/Parking"));
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
        path: PATHS.CHEQUE,
        element: <Cheque />,
      },
      {
        path: PATHS.USER,
        element: <Users />,
      },
      {
        path: PATHS.OWNER,
        element: <Owner />,
      },
      {
        path: PATHS.SELLER,
        element: <Seller />,
      },
      {
        path: PATHS.COST_CENTER,
        element: <CostCenter />,
      },
      {
        path: PATHS.COUNTRY,
        element: <Country />,
      },
      {
        path: PATHS.BANK,
        element: <Bank />,
      },
      {
        path: PATHS.BUILDING,
        element: <Building />,
      },
      {
        path: PATHS.USER,
        element: <Users />,
      },
      {
        path: PATHS.LAND,
        element: <Land />,
      },
      {
        path: PATHS.APARTMENT,
        element: <Apartment />,
      },
      {
        path: PATHS.PARKING,
        element: <Parking />,
      },
      {
        path: PATHS.SHOP,
        element: <Shop />,
      },

      {
        path: PATHS.VILLA,
        element: <Villa />,
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
