import { ChakraProvider } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
const HomePage = React.lazy(() => import("./pages/initial/HomePage"));
const MaterialList = lazy(() => import("./components/material/MaterialList"));
const UserProfilePage = lazy(() => import("./pages/user/UserProfilePage.jsx"));
const ServicePage = React.lazy(() => import("./pages/initial/ServicePage"));
const BenefitUser = lazy(() => import("./pages/benefit/BenefitUser.jsx"));
const BenefitAdmin = lazy(() => import("./pages/benefit/BenefitAdmin.jsx"));
const Errorpage = React.lazy(() => import("./pages/ErrorPage"));
const AlliedPage = React.lazy(() => import("./pages/initial/AlliedPage.jsx"));
const SignUpPage = React.lazy(() => import("./pages/initial/SignUpPage.jsx"));
const SignInPage = React.lazy(() => import("./pages/initial/SignInPage.jsx"));
const ClientPage = React.lazy(() => import("./pages/ClientPage"));
const AdminPage = React.lazy(() => import("./pages/AdminPage"));
const CompanyPage = React.lazy(() => import("./pages/CompaniesPage"));
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
    path: "/material",
    element: <Suspense fallback={<div>Cargando...</div>}><MaterialList /></Suspense>,
  },
  {
    path: "/user",
    element: <Suspense fallback={<div>Cargando...</div>}><UserProfilePage /></Suspense>,
  },
  {
    path: "/client",
    element: <Suspense fallback={<div>Cargando...</div>}><ClientPage /></Suspense>,
  },
  {
    path: "/admin",
    element: <Suspense fallback={<div>Cargando...</div>}><AdminPage /></Suspense>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);