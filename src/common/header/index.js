import React, { Fragment, useState } from "react";
import "./index.css";
import About from "../about";
import Brand from "../brand";
import Join from "../join";
function Header() {
  const [navbar, setNavbar] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 52 ? setNavbar(true) : setNavbar(false);
  };

  const changeMenu = () => {
    if (!navbarMenu) {
      setNavbarMenu(true);
    } else {
      setNavbarMenu(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <Fragment>
      <section className="banner" id="banner">
        <header className={!navbar ? "navbar" : "navbar active"}>
          <a href="/" className="logo">
            Poki<span>.</span>
          </a>
          <div
            onClick={changeMenu}
            className={!navbarMenu ? "menuToggle" : "menuToggle active"}
          ></div>
          <ul className={navbarMenu ? "navigation active" : "navigation"}>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#brand">Brand</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>

            <li>
              <a href="#join">Join Us</a>
            </li>
          </ul>
        </header>
        <div className="shadow-box"></div>
        <div className="content">
          <h2>Poki Mall</h2>

          <p>
            ​POKI MAII 北美最专业日韩正品购物 APP 「日本仓」
            「美国仓」「加拿大仓」
          </p>
          <a href="/" className="btn">
            Download
          </a>
        </div>
      </section>
      <About></About>
      <Brand></Brand>
      <Join></Join>
    </Fragment>
  );
}

export default Header;
