import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy} from "@fortawesome/free-solid-svg-icons";

const Certifications = () => {
  return (
    <>
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Курсы и Сертификаты</h2>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2020 Продвинутое программирование Python. Уровень 2ы (Сертификат)
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2019 Шаблоны проектирования приложенжия масштаба предприятия (Сертификат)
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2019 React-JS - Библиотека для создания пользовательских интерфейсов (Сертификат)
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2019 Python Уровень 1. Основыв программирования (Сертификат)
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2018 Специалист, Генеральный директор
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2017 Специалист, Директор по информационным технологиям
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2016 Комплексная программа. Программирование в системе 1С Предприятие 8.3
            </li>
            <li>
              <span className="fa-li"><FontAwesomeIcon icon={faTrophy} className="text-warning" /></span>
              2014 MBA Start MBA IT
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Certifications;
