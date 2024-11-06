import React from "react";
import style from "./portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <header className={style.portfolio}>
      <h1 className="page-title">Portfolio</h1>
      <div className="project">
        <a href="index.html">
          <img
            src="./images/Home.jpg"
            alt="a picture of some mountains with a cool sky"
            width="300"
            height="200"
          />
        </a>
        <div className="project-details">
          <p className="project-name">Karthik's Website</p>
          <p className="project-details">
            This is my website, which has some of the things I have done,
            including a resume and an about me.
          </p>
          <a href="index.html">LEARN MORE</a>
        </div>
      </div>
    </header>
  );
}
