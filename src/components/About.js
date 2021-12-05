import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import LocaleUtil from "../utils/LocaleUtil";

const About = () => {
  let locale = LocaleUtil();
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            {locale.name}
            <p className="text-primary">{locale.surname}</p>
          </h1>
          <div className="subheading mb-5">
            {locale.address} · <a href="tel:+79533837202">+7 (953) 383-7202</a> · <a href="mailto:nick3olden@gmail.com">nick3olden@gmail.com</a>
          </div>
          <p className="lead mb-5">{locale.about}</p>
          <div className="social-icons">
            {/*TODO сделать и вставить ссылки на резюме на других сайтах*/}
            <a className="p-2" href="https://ekaterinburg.hh.ru/resume/b91bc0b5ff05c12eb90039ed1f7174694e3854" target="_blank"><FontAwesomeIcon className="social-icon" icon={faLink} /></a>
            <a className="p-2" href="https://github.com/NickOlden" target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default About;
