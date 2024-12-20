import React from "react";
import style from "../portfolio.module.css"; //change import
import Image from "next/image";

type Props = {
  params: { slug: string };
};

async function getProject(slug: string) {
  try {
    // This fetches the project from an api endpoint that would GET the project
    const res = await fetch(`http://localhost:3000/api/Portfolio/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

//can define other stuff inside of content
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = await getProject(slug);

  if (!project) {
    return (
      <header className={style.portfolio}>
        <p>No projects found</p>
      </header>
    );
  }

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={style.projectPage}>
      <h1 className="page-title">{project.title}</h1>
      <h3 className={style.date}>{formattedDate}</h3>
      <div>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={300}
          height={300}
        ></Image>
        <p>{project.content}</p>
      </div>
    </div>
  );
}
