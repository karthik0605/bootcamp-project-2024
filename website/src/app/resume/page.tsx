import React from "react";
import style from "./resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <header className={style.resume}>
      <h1 className="page-title">Resume</h1>

      <Link href="/Resume-KarthikBalaji.docx.pdf" download>
        Link to Resume
      </Link>

      <div className={style.resumeContent}>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Education</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              Bachelor in CS at California Polytechnic State University
            </h3>
            <p className={style.entryInfo}>Expected Graduation: June 2027</p>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Coursework</h2>
          <ul className={style.courseList}>
            <li>Computer Organization</li>
            <li>Data Structures</li>
            <li>Discrete Structures</li>
            <li>Object-Oriented Programming</li>
            <li>Systems Programming</li>
          </ul>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Skills</h2>
          <ul className={style.skillList}>
            <li>Languages: Java, Python, C, JavaScript, Swift 3, HTML/CSS</li>
            <li>
              Frameworks/Platforms: React.js, React Native, Next.js, Svelte,
              Expo, Express
            </li>
          </ul>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Projects</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              Huffman Encoding | File Compression
            </h3>
            <p className={style.entryInfo}>Oct 2023</p>
            <p className={style.entryDescription}>
              - Implemented a file compression algorithm in Python with the
              ability to efficiently process large text files... <br />- Used
              Binary Search Trees to assign bits to each character...
            </p>
          </div>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              Fast Track | Fastest Route Calculation App
            </h3>
            <p className={style.entryInfo}>Jul 2022 - Aug 2022</p>
            <p className={style.entryDescription}>
              - Utilized React JS to create a single-page application for route
              planning... <br />- Leveraged a geocoding API to convert addresses
              to coordinates...
            </p>
          </div>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              SleepyHeads | Drowsiness Detection App
            </h3>
            <p className={style.entryInfo}>Jan 2022 - Feb 2022</p>
            <p className={style.entryDescription}>
              - Integrated Google’s machine learning kit for facial
              recognition... <br />- Utilized React Native for performance on
              iOS...
            </p>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              AI and Data Analytics Intern at Sarakki Associates
            </h3>
            <p className={style.entryInfo}>Mar 2024 - Present</p>
            <p className={style.entryDescription}>
              - Conducting research on GPS-3 technology... <br />- Collaborating
              on app development using React...
            </p>
          </div>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Instructor at Mathnasium</h3>
            <p className={style.entryInfo}>Jun 2022 - Jan 2023</p>
            <p className={style.entryDescription}>
              - Developed customized tutoring programs... <br />- Employed
              interactive teaching methods for better student engagement...
            </p>
          </div>
        </section>
      </div>
    </header>
  );
}
