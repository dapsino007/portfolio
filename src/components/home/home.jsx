import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { ArrowDownward } from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developers", "Designers", "Content Creators"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/dapo.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, We are the</h2>
          <h1>Dapsino Duo</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ArrowDownward className="icon"/>
        </a>
      </div>
    </div>
  );
}