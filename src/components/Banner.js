import React from "react";
import "./Banner.css";
// Import all dragon images
import dragon1 from "./images/dragon_1.png";
import dragon2 from "./images/dragon_2.png";
import dragon3 from "./images/dragon_3.png";
import dragon4 from "./images/dragon_4.png";
import dragon5 from "./images/dragon_5.png";
import dragon6 from "./images/dragon_6.png";
import dragon7 from "./images/dragon_7.png";
import dragon8 from "./images/dragon_8.png";
import dragon9 from "./images/dragon_9.png";
import dragon10 from "./images/dragon_10.png";
import dragon11 from "./images/dragon_11.png";
import dragon12 from "./images/dragon_12.png";

const dragonImages = [
  dragon1,
  dragon2,
  dragon3,
  dragon4,
  dragon5,
  dragon6,
  dragon7,
  dragon8,
  dragon9,
  dragon10,
  dragon11,
  dragon12,
];

const Banner = () => {
  return (
    <div className="banner">
      {/* Slider */}
      <div className="slider" style={{ "--quantity": dragonImages.length }}>
        {dragonImages.map((image, idx) => (
          <div
            key={idx}
            className="item"
            style={{ "--position": idx + 1 }}
          >
            <img
              src={image}
              alt={`dragon_${idx + 1}`}
              style={{ width: 150, height: 150 }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        <div className="text-container">
          <h1 className="text-left" data-content="GOPI">GOPI</h1>
          <h1 className="text-right" data-content="SANKAR">SANKAR</h1>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Banner;
