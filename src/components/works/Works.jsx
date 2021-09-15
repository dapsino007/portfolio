import { ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";
import { useState } from "react";
import "./works.scss";
import {worksData} from "../../data";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (dir) => {
    dir === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : worksData.length - 1)
      : setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
     >
        {worksData.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {d.icon}
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos className="arrow left" onClick={() => handleClick("left")}/>
      <ArrowForwardIos className="arrow right" onClick={() => handleClick()}/>
    </div>
  );
}