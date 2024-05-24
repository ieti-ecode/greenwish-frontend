import React, { Suspense } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from './components/initial/Header'
import { Contact } from "./components/initial/Contact"

const HomePage = React.lazy(() => import("./pages/initial/HomePage"));
const ServicePage = React.lazy(() => import("./pages/initial/ServicePage"));
const Errorpage = React.lazy(() => import("./pages/ErrorPage"));
const SignUp = React.lazy(() => import("./components/auth/SignUp"));
const SignIn = React.lazy(() => import("./components/auth/SignIn"));

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
          <Route path="/auth/signup" element={<Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>} />
          <Route path="/auth/signin" element={<Suspense fallback={<div>Loading...</div>}><SignIn /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<div>Loading...</div>}><ServicePage /></Suspense>} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App