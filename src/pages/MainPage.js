import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Certifications from "../components/Certifications";
import Meta from "../components/Meta";
import LocaleUtil from "../utils/LocaleUtil";
import ExperienceStub from "../components/ExperienceStub";

const MainPage = () => {
  let locale = LocaleUtil()
  let fullname = locale.name + " " + locale.surname
  return (
    <>
      <Meta title={fullname} />
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <Skills />
        <ExperienceStub />
        <Interests />
        <Certifications />
      </div>
    </>
  )
}

export default MainPage;
