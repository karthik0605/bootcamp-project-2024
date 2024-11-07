import React from "react";
import style from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <header className={style.contact}>
      <h1 className="page-title">Contact</h1>
      <form className={style.contactForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required className={style.inputField} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required className={style.inputField} />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          required
          className={style.textareaField}
        ></textarea>
        <div className={style.buttonGroup}>
          <button type="submit" className={style.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </header>
  );
}
