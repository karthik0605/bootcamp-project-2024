import React from "react";
import style from "./resume.module.css";
import Link from "next/link";

//change all classNames to include style 
export default function Resume() {
  return (
    <header className={style.resume}>
      <h1 className="page-title">Resume</h1>
      <Link href="Resume-KarthikBalaji-2024.docx.pdf" download>Download Resume</Link>
      <div className="resume">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">
              Bachelor in CS at California Polytechnic State University
            </h3>
            <p className="entry-info">Expected Graduation: June 2027</p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <ul className="course-list">
            <li>Computer Organization</li>
            <li>Data Structures</li>
            <li>Discrete Structures</li>
            <li>Object-Oriented Programming</li>
            <li>Systems Programming</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skill-list">
            <li>Languages: Java, Python, C, JavaScript, Swift 3, HTML/CSS</li>
            <li>
              Frameworks/Platforms: React.js, React Native, NextJs, Svelte,
              Expo, Express
            </li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="entry">
            <h3 className="entry-title">Huffman Encoding | File Compression</h3>
            <p className="entry-info">Oct 2023</p>
            <p className="entry-description">
              - Implemented a file compression algorithm in Python with the
              ability to efficiently process large text files and greatly
              shorten the time needed to process each character of the file by
              over 50% <br />
              - Used Binary Search Trees to recursively assign bits to each
              character, by assigning less frequent characters longer sequences
              of bits and vice versa, thus increasing the overall processing
              speed of larger files
              <br />
            </p>
          </div>
          <div className="entry">
            <h3 className="entry-title">
              Fast Track | Fastest Route Calculation App
            </h3>
            <p className="entry-info">Jul 2022 - Aug 2022</p>
            <p className="entry-description">
              - Utilized React JS in conjunction to create a single-page
              application for route planning
              <br />
              - Leveraged a geocoding API to efficiently convert user-provided
              addresses into geographical coordinates and provide accurate
              mapping services
              <br />
              - Implemented a lightweight and interactive mapping library to
              enhance the user interface with dynamic map displays, route
              visualization, and the ability to interact with waypoints
              seamlessly
              <br />
              - Crafted a user interface using HTML, CSS, and JavaScript,
              ensuring a consistent and responsive design across various devices
              and screen sizes
              <br />
            </p>
          </div>
          <div className="entry">
            <h3 className="entry-title">
              SleepyHeads | Drowsiness Detection App
            </h3>
            <p className="entry-info">Jan 2022 - Feb 2022</p>
            <p className="entry-description">
              - Integrated Google’s machine learning kit for facial recognition
              to accurately identify signs of driver drowsiness. The model
              analyzes eye movements in real time to assess the driver's level
              of alertness
              <br />
              - Utilized React and JavaScript to create a user-friendly
              interface while ensuring cross-platform compatibility
              <br />
              - Employed the React Native framework and Expo-CLI to ensure
              optimal performance on iOS platforms, achieving over 100 downloads
              on the App Store
              <br />
              - Designed and implemented an intuitive user interface with HTML
              and CSS, providing users with a visually appealing and
              easy-to-navigate experience with customizable alarm sounds and
              options
              <br />
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="entry">
            <h3 className="entry-title">
              AI and Data Analytics Intern at Sarakki Associates
            </h3>
            <p className="entry-info">Mar 2024 - Present</p>
            <p className="entry-description">
              - Conducting research and compiling reports on the uses for newly
              sanctioned GPS-3 technology, specifically the LC1 signal, for
              civilian and border purposes
              <br />
              - Working on other projects involving Google’s Vertex AI for
              predicting border wait times
              <br />
              - Collaborating with lead engineers on the creation of an app for
              the company, using React
              <br />
            </p>
          </div>
          <div className="entry">
            <h3 className="entry-title">Instructor at Mathnasium</h3>
            <p className="entry-info">Jun 2022 - Jan 2023</p>
            <p className="entry-description">
              - Developed customized tutoring programs aligned with the specific
              needs and goals of students
              <br />
              - Employed a variety of interactive teaching methods, such as
              workshops, hands-on exercises, and case studies, to ensure that
              students actively participated in the learning process
              <br />
            </p>
          </div>
        </section>
      </div>
    </header>
  );
}
