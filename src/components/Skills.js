import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faJava, faPython, faReact, faPhp, faJenkins, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";
import LocaleUtil from "../utils/LocaleUtil";

const Skills = () => {
  let locale = LocaleUtil()
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">{locale.menu_skills}</h2>
          <div className="subheading mb-3">{locale.skills_title}</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item"><FontAwesomeIcon icon={faJava} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faReact} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faPython} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faPhp} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faCss3} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faDatabase} /></li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faJenkins} /></li>
          </ul>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              {locale.skills_bp}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              Mobile-First, {locale.skills_resp_apps}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              {locale.skills_unit_test}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              {locale.skills_cross_func}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              {locale.skills_agile_scrum}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              {locale.skills_dbs}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              {locale.skills_ci_cd}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
              {locale.skills_frameworks}
            </li>
            <li>
              <hr />
              <h3>PS:</h3>
              <p>{locale.skills_ps_one}</p>
            </li>
            <li>
              <p>{locale.skills_ps_two}</p>
            </li>
            <li>
              <p>{locale.skills_ps_three}</p>
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default Skills;
