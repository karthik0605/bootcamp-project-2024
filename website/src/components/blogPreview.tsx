import Link from "next/link";
import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Blog from "../database/blogSchema";
import Project from "../database/projectSchema";
//import blogs from "@/app/blogData";

//Using Blog Preview as general preview format for portfolio cuz I like it/don't need more styling
//can add "Portfolio Preview" component if i feel like I need to add more

//Can change name to just "preview" when done to make it more readable
export default function BlogPreview(props: Blog | Project) {
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
        <Link href={`/${props.slug}`}>
          <button className={style.button}>Read More</button>
        </Link>
        <p>{props.description}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}
