import React from "react";

const LocaleUtil = () => {
  let lang = window.navigator.userLanguage || window.navigator.language;

  let _RUS = {
    name: "Николай",
    surname: "Пискунов",
    menu_about_me: "Обо мне",
    menu_skills: "Умения",
    menu_hobby: "Интересы",
    menu_certificates: "Сертификаты",
    menu_experience: "Опыт",
    address: "Россия, г. Екатеринбруг",
    about: "В общей сложности в IT уже более 10 лет. Основной упор на данный момент - Программирование и Разработка. Имею опыт руководящей работы",
    skills_title: "Языки программирования и инструменты",
    skills_bp: "Автоматизация и Бизнес процессы",
    skills_resp_apps: "Адаптивные приложения",
    skills_unit_test: "Юнит тесты",
    skills_cross_func: "Кроссфункциональность",
    skills_agile_scrum: "Agile & Scrum",
    skills_dbs: "Oracle, MySQL, PostgreSQL, MongoDB",
    skills_ci_cd: "CI/CD, Jenkins",
    skills_frameworks: "SpringBoot, React, Flask, Bootstrap...",
    skills_ps_one: "Этот сайт написан на ReactJS, хранится в репозитории на GitHub и попадает на сервера хостинга Netangels с помощью Jenkins, который развернут на моем сервере (Ubuntu).",
    skills_ps_two: "На этом же сервере развернут VScode (web версия).",
    skills_ps_three: "Этот сайт переведен на 3 языка - Русский, Англйский и Китайский. Язык меняется в зависимости от языка браузера",
    hobby_one: "Свободное время я провожу с семьей или повышаю квалификацию.",
    hobby_two: "Понимаю Английский и Китайский языки.",
    hobby_three: "Увлекаюсь шахматами и покером.",
    certs_title: "КУРСЫ И СЕРТИФИКАТЫ",
    certs_2014: "2014 MBA Start MBA IT",
    certs_2016: "2016 Комплексная программа. Программирование в системе 1С Предприятие 8.3",
    certs_2017: "2017 Специалист, Директор по информационным технологиям",
    certs_2018: "2018 Специалист, Генеральный директор",
    certs_2019_p1: "2019 Python Уровень 1. Основыв программирования (Сертификат)",
    certs_2019_react: "2019 React-JS - Библиотека для создания пользовательских интерфейсов (Сертификат)",
    certs_2019_gof: "2019 Шаблоны проектирования приложенжия масштаба предприятия (Сертификат)",
    certs_2020_p2: "2020 Продвинутое программирование Python. Уровень 2 (Сертификат)",
    stub_exp_title: "Страница в разработке",
    stub_exp_description: "Пока можете попрыгать через пеньки =) Кликните на фрейм чтобы начать. Кликните еще раз чтобы прыгнуть (Игра написана мной на JS)"
  }

  let _CHI = {
    name: "尼古拉",
    surname: "皮斯库诺夫",
    menu_about_me: "关于我",
    menu_skills: "技能",
    menu_hobby: "兴趣",
    menu_certificates: "证书",
    experience: "经验",
    address: "俄罗斯，叶卡",
    about: "总的来说，他已经在 IT 行业工作了 10 多年。目前的主要重点是编程和开发。我有管理工作经验",
    skills_title: "编程语言和工具",
    skills_bp: "自动化和业务流程",
    skills_resp_apps: "响应式应用程序",
    skills_unit_test: "单元测试",
    skills_cross_func: "跨功能",
    skills_agile_scrum: "Agile & Scrum",
    skills_dbs: "Oracle, MySQL, PostgreSQL, MongoDB",
    skills_ci_cd: "CI/CD, Jenkins",
    skills_frameworks: "SpringBoot, React, Flask, Bootstrap...",
    skills_ps_one: "This site is written in ReactJS, stored in a repository on GitHub and brought to Netangels hosting servers using Jenkins, which is deployed on my server (Ubuntu).",
    skills_ps_two: "VScode is deployed on the same server (web version).",
    skills_ps_three: "This site has been translated into 3 languages - English, Chinese and Russian. The language changes depending on the language of the browser.",
    hobby_one: "我与家人共度空闲时间或提高我的资格。",
    hobby_two: "我懂英文和中文。",
    hobby_three: "我喜欢国际象棋和扑克。",
    certs_title: "课程和证书",
    certs_2014: "2014 MBA Start MBA IT",
    certs_2016: "2016 Comprehensive program. Programming in the 1C Enterprise 8.3 system",
    certs_2017: "2017 Specialist, Chief Information Officer",
    certs_2018: "2018 Specialist, General Director",
    certs_2019_p1: "2019 Python Level 1. Basic Programming (Certificate)",
    certs_2019_react: "2019 React-JS - Library for Building User Interfaces (Certificate)",
    certs_2019_gof: "2019 Enterprise Application Design Patterns (Certificate)",
    certs_2020_p2: "2020 Advanced Python Programming. Level 2 (Certificate)",
    stub_exp_title: "页面建设中"
  }

  let _ENG = {
    name: "Nikolai",
    surname: "Piskunov",
    menu_about_me: "About",
    menu_skills: "Skills",
    menu_hobby: "Hobby",
    menu_certificates: "Certificates",
    address: "Russia, Yekaterinburg",
    experience: "Experience",
    about: "In total, I have been in IT for over 10 years. The main focus at the moment is Programming and Development. I have experience in management.",
    skills_title: "PROGRAMMING LANGUAGES & TOOLS",
    skills_bp: "Automation and Business Processes",
    skills_resp_apps: "Responsive Apps",
    skills_unit_test: "Unit Tests",
    skills_cross_func: "Cross functionality",
    skills_agile_scrum: "Agile & Scrum",
    skills_dbs: "Oracle, MySQL, PostgreSQL, MongoDB",
    skills_ci_cd: "CI/CD, Jenkins",
    skills_frameworks: "SpringBoot, React, Flask, Bootstrap...",
    skills_ps_one: "This site is written in ReactJS, stored in a repository on GitHub and brought to Netangels hosting servers using Jenkins, which is deployed on my server (Ubuntu).",
    skills_ps_two: "VScode is deployed on the same server (web version).",
    skills_ps_three: "This site has been translated into 3 languages - English, Chinese and Russian. The language changes depending on the language of the browser.",
    hobby_one: "I spend my free time with my family or improve my qualifications.",
    hobby_two: "I understand English and Chinese.",
    hobby_three: "I am fond of chess and poker.",
    certs_title: "COURSES AND CERTIFICATES",
    certs_2014: "2014 MBA Start MBA IT",
    certs_2016: "2016 Comprehensive program. Programming in the 1C Enterprise 8.3 system",
    certs_2017: "2017 Specialist, Chief Information Officer",
    certs_2018: "2018 Specialist, General Director",
    certs_2019_p1: "2019 Python Level 1. Basic Programming (Certificate)",
    certs_2019_react: "2019 React-JS - Library for Building User Interfaces (Certificate)",
    certs_2019_gof: "2019 Enterprise Application Design Patterns (Certificate)",
    certs_2020_p2: "2020 Advanced Python Programming. Level 2 (Certificate)",
    stub_exp_title: "Page under construction"
  }

  if (lang.indexOf('zh') > -1) {
    return _CHI;
  } else if (lang.indexOf('ru') > -1) {
    return _RUS;
  } else {
    return _ENG;
  }

}

export default LocaleUtil;
