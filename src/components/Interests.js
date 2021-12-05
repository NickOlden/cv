import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFan , faLanguage, faChess} from "@fortawesome/free-solid-svg-icons";
import LocaleUtil from "../utils/LocaleUtil";

const Interests = () => {
  let locale = LocaleUtil()
  return (
    <>
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">{locale.menu_hobby}</h2>
          <p><FontAwesomeIcon icon={faFan} /> {locale.hobby_one}</p>
          <p><FontAwesomeIcon icon={faLanguage} /> {locale.hobby_two}</p>
          <p><FontAwesomeIcon icon={faChess} /> {locale.hobby_three}</p>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default Interests;
