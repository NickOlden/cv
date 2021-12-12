import React from "react";
import Iframe from "react-iframe";
import LocaleUtil from "../utils/LocaleUtil";

const Experience = () => {
  let locale = LocaleUtil()
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">{locale.menu_experience}</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0" />
              <div className="subheading mb-3">{locale.stub_exp_title}</div>
              <p>{locale.stub_exp_description}</p>
              <Iframe url="https://mgrush.akademit.ru/"
                      width="800px"
                      height="450px"
                      display="initial"
                      position="relative"/>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default Experience;
