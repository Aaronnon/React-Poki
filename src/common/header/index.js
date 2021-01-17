import React, { Fragment, Component } from "react";
import "./index.css";
import About from "../about";
import Brand from "../brand";
class Header extends Component {
  render() {
    return (
      <Fragment>
        <section className="banner" id="banner">
          <header>
            <a href="/" className="logo">
              Poki<span>.</span>
            </a>
            <ul className="navigation">
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
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
      </Fragment>
    );
  }
}

export default Header;
