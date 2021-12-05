import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import LocaleUtil from "../utils/LocaleUtil";

const Certifications = () => {
  let locale = LocaleUtil()
  return (
    <>
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">{locale.certs_title}</h2>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2020_p2}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2019_gof}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2019_react}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2019_p1}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2018}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2017}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2016}
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              {locale.certs_2014}
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Certifications;
