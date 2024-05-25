import { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const HomePage = React.lazy(() => import("./pages/initial/HomePage"));
const BenefitList = lazy(() => import("./components/benefit/BenefitList"));
const CompanyList = lazy(() => import("./components/company/CompanyList"));
const MaterialList = lazy(() => import("./components/material/MaterialList"));
const UserInformation = lazy(() => import("./components/user/UserProfile.jsx"));
const ServicePage = React.lazy(() => import("./pages/initial/ServicePage"));
const Errorpage = React.lazy(() => import("./pages/ErrorPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage.jsx"));
const SignInPage = React.lazy(() => import("./pages/SignInPage.jsx"));
const ClientPage = React.lazy(() => import("./pages/ClientPage"));
const AdminPage = React.lazy(() => import("./pages/AdminPage"));
const App = React.lazy(() => import("./App"));
import './index.css'
import UserProfilePage from "./pages/user/UserProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>,
    errorElement: <Errorpage />,
  },
  {
    path: "/auth/signup",
    element: <Suspense fallback={<div>Loading...</div>}><SignUpPage /></Suspense>,
  },
  {
    path: "/auth/signin",
    element: <Suspense fallback={<div>Loading...</div>}><SignInPage /></Suspense>,
  },
  {
    path: "/services",
    element: <Suspense fallback={<div>Loading...</div>}><ServicePage /></Suspense>,
  },
  {
    path: "/app",
    element: <Suspense fallback={<div>Loading...</div>}><App /></Suspense>,
  },
  {
    path: "/benefit",
    element: <Suspense fallback={<div>Loading...</div>}><BenefitList /></Suspense>,
  },
  {
    path: "/company",
    element: <Suspense fallback={<div>Loading...</div>}><CompanyList /></Suspense>,
  },
  {
    path: "/material",
    element: <Suspense fallback={<div>Loading...</div>}><MaterialList /></Suspense>,
  },
  {
    path: "/user",
    element: <Suspense fallback={<div>Loading...</div>}><UserProfilePage /></Suspense>,
  },
  {
    path: "/client",
    element: <Suspense fallback={<div>Loading...</div>}><ClientPage /></Suspense>,
  },
  {
    path: "/admin",
    element: <Suspense fallback={<div>Loading...</div>}><AdminPage /></Suspense>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
