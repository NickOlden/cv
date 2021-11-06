import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Certifications from "../components/Certifications";
import Meta from "../components/Meta";

const MainPage = () => {
  return (
    <>
      <Meta title="Nick Pi" />
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <Skills />
        <Interests />
        <Certifications />
      </div>
    </>
  )
}

export default MainPage;
