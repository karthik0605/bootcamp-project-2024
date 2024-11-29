import React from "react";
import style from "./portfolio.module.css";
import BlogPreview from "../../components/blogPreview";
import Project from "../../database/projectSchema";
import connectDB from "../../database/db";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all projects and sort by date
    const projects = await Project.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();
  if (!projects) {
    return (
      <header className={style.portfolio}>
        <p>No projects found</p>
      </header>
    );
  }
  return (
    <header className={style.portfolio}>
      <h1 className="page-title">Portfolio</h1>
      <div className={style.portfolio}>
        {projects.map((project) => (
          <BlogPreview key={project.slug} {...project.toObject()} />
        ))}
      </div>
    </header>
  );
  /*
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
    */
}
