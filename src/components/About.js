import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Николай
            <span className="text-primary">Пискунов</span>
          </h1>
          <div className="subheading mb-5">
            Россия, г. Екатеринбруг, ул. П. Шаманова · <a href="tel:+79533837202">+7 (953) 383-7202</a> · <a href="mailto:nick3olden@gmail.com">nick3olden@gmail.com</a>
          </div>
          <p className="lead mb-5">В общей сложности в IT уже более 10 лет. Основной упор на данный момент - Программирование и Разработка. Имею опыт руководящей работы</p>
          <div className="social-icons">
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
