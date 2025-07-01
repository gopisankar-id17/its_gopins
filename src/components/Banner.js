import React from "react";
import "./Banner.css";
// Import all tech icons
import mongodb from "./icons/mongodb.svg";
import nodejs from "./icons/nodejs.svg";
import reactjs from "./icons/react.svg";
import express from "./icons/express.svg";
import html5 from "./icons/html5.svg";
import css3 from "./icons/css3.svg";
import java from "./icons/java.svg";
import github from "./icons/github.svg";
import git from "./icons/git.svg";
import c from "./icons/c.svg";
import python from "./icons/python.svg";
import php from "./icons/php.svg";
import mysql from "./icons/mysql.svg";

const techIcons = [
  mongodb,
  nodejs,
  reactjs,
  express,
  html5,
  css3,
  java,
  github,
  git,
  c,
  python,
  php,
  mysql,
];

const Banner = () => {
  return (
    <div className="banner">
      {/* Slider */}
      <div className="slider" style={{ "--quantity": techIcons.length }}>
        {techIcons.map((icon, idx) => (
          <div
            key={idx}
            className="item"
            style={{ "--position": idx + 1 }}
          >
            <img
              src={icon}
              alt={`tech_icon_${idx + 1}`}
              style={{ width: 80, height: 80 }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        <h1 data-content="GOPI SANKAR">GOPI SANKAR</h1>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Banner;
