import React from "react";
import style from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <header className={style.contact}>
      <h1 className="page-title">Contact</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <label htmlFor="name">Message:</label>
        <textarea></textarea>
        <input type="submit" value="Submit" />
      </form>
    </header>
  );
}
