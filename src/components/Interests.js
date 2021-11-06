import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFan , faLanguage, faChess} from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
  return (
    <>
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Интересы</h2>
          <p><FontAwesomeIcon icon={faFan} />  Свободное время я провожу с семьей или повышаю квалификацию.</p>
          <p><FontAwesomeIcon icon={faLanguage} />  Понимаю Английский и Китайский языки.</p>
          <p><FontAwesomeIcon icon={faChess} />  Увлекаюсь шахматами и покером.</p>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default Interests;
