import { ChakraProvider } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
const HomePage = React.lazy(() => import("./pages/initial/HomePage"));
const MaterialClientPage = lazy(() => import("./pages/material/ClientPage"));
const MaterialAdmin = lazy(() => import("./pages/material/AdminPage"));
const UserProfilePage = lazy(() => import("./pages/user/UserProfilePage"));
const UserProfileAdminPage = lazy(() => import("./pages/user/UserProfileAdminPage"));
const UserProfileCompanyPage = lazy(() => import("./pages/user/UserProfileCompanyPage"));
const UsersPage = React.lazy(() => import("./pages/user/UsersPage"));
const ServicePage = React.lazy(() => import("./pages/initial/ServicePage"));
const BenefitUser = lazy(() => import("./pages/benefit/BenefitUser.jsx"));
const BenefitAdmin = lazy(() => import("./pages/benefit/BenefitAdmin.jsx"));
const Errorpage = React.lazy(() => import("./pages/ErrorPage"));
const AlliedPage = React.lazy(() => import("./pages/initial/AlliedPage.jsx"));
const SignUpPage = React.lazy(() => import("./pages/initial/SignUpPage.jsx"));
const SignInPage = React.lazy(() => import("./pages/initial/SignInPage.jsx"));
const CompanyPage = React.lazy(() => import("./pages/company/CompaniesPage.jsx"));
const WelcomePage = React.lazy(() => import("./pages/welcome/WelcomePage"));
const WelcomeClientPage = React.lazy(() => import("./pages/welcome/WelcomeClientPage"));
const WelcomeCompanyPage = React.lazy(() => import("./pages/welcome/WelcomeCompanyPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Cargando...</div>}><HomePage /></Suspense>,
    errorElement: <Errorpage />,
  },
  {
    path: "/auth/signup",
    element: <Suspense fallback={<div>Cargando...</div>}><SignUpPage /></Suspense>,
  },
  {
    path: "/allied",
    element: <Suspense fallback={<div>Cargando...</div>}><AlliedPage /></Suspense>,
  },
  {
    path: "/auth/signin",
    element: <Suspense fallback={<div>Cargando...</div>}><SignInPage /></Suspense>,
  },
  {
    path: "/services",
    element: <Suspense fallback={<div>Cargando...</div>}><ServicePage /></Suspense>,
  },
  {
    path: "/welcomeClient",
    element: <Suspense fallback={<div>Cargando...</div>}><WelcomeClientPage /></Suspense>,
  },
  {
    path: "/welcomeCompany",
    element: <Suspense fallback={<div>Cargando...</div>}><WelcomeCompanyPage /></Suspense>,
  },
  {
    path: "/welcome",
    element: <Suspense fallback={<div>Cargando...</div>}><WelcomePage /></Suspense>,
  },
  {
    path: "/benefit",
    element: <Suspense fallback={<div>Loading...</div>}><BenefitUser /></Suspense>,
  },
  {
    path: "/benefitAdmin",
    element: <Suspense fallback={<div>Loading...</div>}><BenefitAdmin /></Suspense>,
  },
  {
    path: "/company",
    element: <Suspense fallback={<div>Cargando...</div>}><CompanyPage /></Suspense>,
  },
  {
    path: "/materialClient",
    element: <Suspense fallback={<div>Cargando...</div>}><MaterialClientPage /></Suspense>,
  },
  {
    path: "/material",
    element: <Suspense fallback={<div>Cargando...</div>}><MaterialAdmin /></Suspense>,
  },
  {
    path: "/userAdmin",
    element: <Suspense fallback={<div>Cargando...</div>}><UserProfileAdminPage /></Suspense>,
  },
  {
    path: "/userCompany",
    element: <Suspense fallback={<div>Cargando...</div>}><UserProfileCompanyPage /></Suspense>,
  },
  {
    path: "/user",
    element: <Suspense fallback={<div>Cargando...</div>}><UserProfilePage /></Suspense>,
  },
  {
    path: "/allUsers",
    element: <Suspense fallback={<div>Cargando...</div>}><UsersPage /></Suspense>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);