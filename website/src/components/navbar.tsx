import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // for next, style refers to a .style local css (navbar.module.css)
    <header className={style.navbar} >
      <h1> Karthik Balaji's Personal Website </h1>
      <nav>
        <ul className={style.navList}>  
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/blogs">Blog</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/resume" >Resume</Link></li>
            <li><Link href="/contact" >Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}