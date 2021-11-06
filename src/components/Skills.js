import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faJava, faPython, faReact, faPhp, faJenkins} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Умения</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item"><FontAwesomeIcon icon={faJava} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faPython} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faReact} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faPhp} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faJenkins} /></li>
          </ul>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              Автоматизация и Бизнес процессы
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              Mobile-First, Адаптивные приложения
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              Юнит тесты
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              Кроссфункциональность
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              Agile & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default Skills;
