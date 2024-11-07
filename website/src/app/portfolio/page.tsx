import React from "react";
import style from "./portfolio.module.css";
import Link from "next/link";

//change all href to links
//change css to styles
//if I get more projects then I can map each one
export default function Portfolio() {
  return (
    <header className={style.portfolio}>
      <h1 className="page-title">Portfolio</h1>
      <div className={style.project}>
        <img
          src="/Home.jpg"
          alt="a picture of some mountains with a cool sky"
          width="300"
          height="200"
        />
        <div className={style.projectDetails}>
          <p className={style.projectName}>Karthik's Website</p>
          <p className={style.projectDescription}>
            This is my website, which has some of the things I have done,
            including a resume and an about me.
          </p>
          <Link href="/">LEARN MORE</Link>
        </div>
      </div>
    </header>
  );
}
