"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "./contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const serviceID = "service_62ovgpa";
    const templateID = "template_0w5ejos";
    const publicKey = "bZmFdu5fRzir6j4y7";

    await emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: name,
          to_name: "Karthik",
          email: email,
          message: message,
        },
        publicKey
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <header className={style.contact}>
      <h1 className="page-title">Contact Me</h1>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={style.inputField}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={style.inputField}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
