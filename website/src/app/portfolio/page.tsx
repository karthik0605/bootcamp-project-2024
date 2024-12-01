import React from "react";
import style from "./portfolio.module.css";
import ProjectPreview from "../../components/projectPreview";
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
          <ProjectPreview key={project.slug} {...project.toObject()} />
        ))}
      </div>
    </header>
  );
  
}
