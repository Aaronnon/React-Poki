import { Component, Fragment, React } from "react";
import "./index.css";
import a from "../../image/a.webp";
import b from "../../image/b.webp";
import c from "../../image/c.webp";
import d from "../../image/d.webp";
import e from "../../image/e.webp";
import f from "../../image/f.webp";

class Brand extends Component {
  render() {
    return (
      <Fragment>
        <section className="brand" id="brand">
          <div className="title">
            <h2 className="titleText">
              <span>B</span>rand <span>W</span>all
            </h2>
            <p>Popular brand recommendation</p>
          </div>
          <div className="content">
            <div className="box">
              <div className="imgBx">
                <img alt="a" src={a}></img>
              </div>
              <div className="text">
                <h3>SKII</h3>
              </div>
            </div>
            <div className="box">
              <div className="imgBx">
                <img alt="a" src={b}></img>
              </div>
              <div className="text">
                <h3>SHISEIDO</h3>
              </div>
            </div>
            <div className="box">
              <div className="imgBx">
                <img alt="a" src={c}></img>
              </div>
              <div className="text">
                <h3>ETUDE</h3>
              </div>
            </div>
            <div className="box">
              <div className="imgBx">
                <img alt="a" src={d}></img>
              </div>
              <div className="text">
                <h3>San-X</h3>
              </div>
            </div>
            <div className="box">
              <div className="imgBx">
                <img alt="a" src={e}></img>
              </div>
              <div className="text">
                <h3>Amino Mason</h3>
              </div>
            </div>
            <div className="box">
              <div className="imgBx">
                <img alt="a" src={f}></img>
              </div>
              <div className="text">
                <h3>POLA</h3>
              </div>
            </div>
          </div>
          <div className="title">
            <a href="/" className="btn">
              More
            </a>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Brand;
