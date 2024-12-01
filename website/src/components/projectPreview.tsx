import Link from "next/link";
import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Project from "../database/projectSchema";

export default function ProjectPreview(props: Project) {
  console.log(props.title);
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={style.blogPreview}>
      <h3> {props.title} </h3>
      <div>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
        ></Image>
        <Link href={`portfolio/${props.slug}`}>
          <button className={style.button}>Link to Project</button>
        </Link>
        <p>{props.description}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}
