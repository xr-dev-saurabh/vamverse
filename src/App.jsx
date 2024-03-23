import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Loading from "./components/Loading";
import NewHero from "./components/NewHero";
import AboutUs from "./components/AboutUs";
import Overlay from "./components/Overlay";
import Product from "./components/Product";
const Contact = React.lazy(() => import("./components/Contact"));
const FirstQoute = React.lazy(() => import("./components/FirstQoute"));
const Footer = React.lazy(() => import("./components/Footer"));
const Services = React.lazy(() => import("./components/Services"));
const Technology = React.lazy(() => import("./components/Technology"));
// const AboutUs = React.lazy(() => import("./components/AboutUs"));
const Model = React.lazy(() => import("./components/Model"));
// const Filter = React.lazy(() => import("./components/Filter"));
const NFC = React.lazy(() => import("./components/NFC"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NewHero />
                <Overlay />
                <FirstQoute />
                <Services />
                <Product />
                <NFC />
                <AboutUs />
                <Technology />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/model/:id" element={<Model />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
