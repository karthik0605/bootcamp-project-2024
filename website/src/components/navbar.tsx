import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"

    // for next, style refers to a .style local css (navbar.module.css
    <header className={style.navbar} >
      <h1> Karthik Balaji's Personal Website </h1>
      <nav>
        <ul className={style.navList}>  
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/blogs">Blog</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/resume" >Resume</Link></li>
            <li><Link href="/about" >Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}