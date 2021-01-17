import { Fragment, React } from "react";
import "./index.css";
import joinImg from "../../image/1.webp";

function Join() {
  return (
    <Fragment>
      <section className="join" id="join">
        <div className="img-container">
          <img alt="join" className="img-join" src={joinImg}></img>
        </div>
        <div className="text-container">
          <span>J</span>oin <span>U</span>s
          <p className="content">
            欢迎有能力的你加入小红Mall！请将您的简历发送至：hr@hongmall.shop
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default Join;
