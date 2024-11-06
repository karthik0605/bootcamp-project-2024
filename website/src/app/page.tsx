import React from "react";
import style from "./page.module.css";

//add styles whenever
export default function Home() {
  return (
    <header className={style.header}>
      <h1 className="page-title">Karthik Balaji's Website</h1>
      <div className="about">
        <div className="about-image">
          <img
            src="./public/backgroundMountain.jpg"
            alt="a picture of some mountains with a cool sky"
            width="100"
            height="100"
          />
        </div>
        <div className="about-text">
          <p>
            Hello, I am Karthik Balaji, a 2nd year CS student at{" "}
            <em>Cal Poly Slo</em>. I like to play chess and badminton in my free
            time, and love nature.
          </p>
          <p>
            I am excited to be a part of <strong>Hack4Impact</strong> this year!
          </p>
        </div>
      </div>
    </header>
  );
}
