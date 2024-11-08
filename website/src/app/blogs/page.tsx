import React from "react";
import style from "./blogs.module.css";
import blogs from "../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Blogs() {
  return (
    <header className={style.blogs}>
      <h1 className="page-title">Blogs</h1>
      <div className={style.blogs}>
        {blogs.map((blog) => (
          <div>
            <BlogPreview {...blog} /> 
          </div>
        ))}
      </div>
    </header>
  );
}
