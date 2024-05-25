import { ChakraProvider } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
const HomePage = React.lazy(() => import("./pages/initial/HomePage"));
const BenefitList = lazy(() => import("./components/benefit/BenefitList"));
const CompanyList = lazy(() => import("./components/company/CompanyList"));
const MaterialList = lazy(() => import("./components/material/MaterialList"));
const UserInformation = lazy(() => import("./components/user/UserInformation"));
const ServicePage = React.lazy(() => import("./pages/initial/ServicePage"));
const Errorpage = React.lazy(() => import("./pages/ErrorPage"));
const AlliedPage = React.lazy(() => import("./pages/initial/AlliedPage.jsx"));
const SignUpPage = React.lazy(() => import("./pages/initial/SignUpPage.jsx"));
const SignInPage = React.lazy(() => import("./pages/initial/SignInPage.jsx"));
const ClientPage = React.lazy(() => import("./pages/ClientPage"));
const AdminPage = React.lazy(() => import("./pages/AdminPage"));
const App = React.lazy(() => import("./App"));

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
    path: "/app",
    element: <Suspense fallback={<div>Cargando...</div>}><App /></Suspense>,
  },
  {
    path: "/benefit",
    element: <Suspense fallback={<div>Cargando...</div>}><BenefitList /></Suspense>,
  },
  {
    path: "/company",
    element: <Suspense fallback={<div>Cargando...</div>}><CompanyList /></Suspense>,
  },
  {
    path: "/material",
    element: <Suspense fallback={<div>Cargando...</div>}><MaterialList /></Suspense>,
  },
  {
    path: "/user",
    element: <Suspense fallback={<div>Cargando...</div>}><UserInformation /></Suspense>,
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
