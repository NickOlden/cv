import React, {useState} from "react";
import profile from "../assets/img/profile.jpg";

const Navigation = () => {
  let width = window.innerWidth;
  const [toggleIfSizeChange, setToggleIfSizeChange] = useState(width > 991);

  const toggleMenu = () => {
    setToggleIfSizeChange(!toggleIfSizeChange);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#about">
        <span className="d-block d-lg-none">Clarence Taylor</span>
        <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="profile" /></span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span onClick={toggleMenu} className="navbar-toggler-icon"/></button>
      <div className={!toggleIfSizeChange?"collapse navbar-collapse" : "navbar-collapse"} id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item"><a onClick={() => setToggleIfSizeChange(false)} className="nav-link js-scroll-trigger" href="#about">Обо мне</a></li>
          <li className="nav-item"><a onClick={() => setToggleIfSizeChange(false)} className="nav-link js-scroll-trigger" href="#skills">Умения</a></li>
          <li className="nav-item"><a onClick={() => setToggleIfSizeChange(false)} className="nav-link js-scroll-trigger" href="#interests">Интересы</a></li>
          <li className="nav-item"><a onClick={() => setToggleIfSizeChange(false)} className="nav-link js-scroll-trigger" href="#awards">Сертификаты</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;