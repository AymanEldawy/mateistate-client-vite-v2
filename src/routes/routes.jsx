import Layout from "@/components/layout/Layout";
import PATHS from "@/data/paths";
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
const Currency = React.lazy(() => import("@/pages/views/Currency/Currency"));
const ReservationProperty = React.lazy(() => import("@/pages/views/ReservationProperty/ReservationProperty"));
const Service = React.lazy(() => import("@/pages/views/Service/Service"));
const UserWorkTime = React.lazy(() => import("@/pages/views/UserWorkTime/UserWorkTime"));
const CostCenter = React.lazy(() =>
  import("../pages/views/CostCenter/CostCenter")
);
const Tools = React.lazy(() => import("../pages/views/Building/Tools"));
const Country = React.lazy(() => import("../pages/views/Country/Country"));
const Apartment = React.lazy(() => import("../pages/views/Apartment/Apartment"));
const Bank = React.lazy(() => import("../pages/views/Bank/Bank"));
const Parking = React.lazy(() => import("../pages/views/Parking/Parking"));
const Bills = React.lazy(() => import("../pages/views/Bills/Bills"));
const Vouchers = React.lazy(() => import("../pages/views/Vouchers/Vouchers"));
const Entries = React.lazy(() => import("../pages/views/Entries/Entries"));
const Account = React.lazy(() => import("../pages/views/Account/Account"));
const MaterialGroup = React.lazy(() =>
  import("../pages/views/MaterialGroup/MaterialGroup")
);
const Category = React.lazy(() => import("../pages/views/Category/Category"));
const CategoryProblem = React.lazy(() => import("../pages/views/Category/CategoryProblem"));
const Store = React.lazy(() => import("../pages/views/Store/Store"));
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

// Reports 
const ChequeReport = React.lazy(() => import("../pages/reports/ChequeReport"));



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
      {
        path: PATHS.CURRENCY,
        element: <Currency />,
      },
      {
        path: PATHS.RESERVATION_PROPERTY,
        element: <ReservationProperty />,
      },
      {
        path: PATHS.SERVICE,
        element: <Service />,
      },
      {
        path: PATHS.USER_WORK_TIMES,
        element: <UserWorkTime />,
      },
      {
        path: PATHS.BILLS,
        element: <Bills />,
      },
      {
        path: PATHS.VOUCHERS,
        element: <Vouchers />,
      },
      {
        path: PATHS.ENTRIES,
        element: <Entries />,
      },
      /************************************** Reports **************************************/
      {
        path: PATHS.CHEQUE_REPORT,
        element: <ChequeReport />,
      },
      {
        path: PATHS.MATERIAL_GROUP,
        element: <MaterialGroup />,
      },
      /************************************** Category **************************************/
      {
        path: PATHS.CATEGORY,
        element: <Category />,
      },
      {
        path: PATHS.Tools,
        element: <Tools />,
      },
      {

        path: PATHS.CATEGORY_PROBLEM,
        element: <CategoryProblem />,
      },
      /******************** STORE ********************/
      {
        path: PATHS.STORE,
        element: <Store />,
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
