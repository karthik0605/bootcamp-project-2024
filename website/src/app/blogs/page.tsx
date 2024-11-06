import React from "react";
import style from "./blogs.module.css";
import blogs from "../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Blogs() {
  return (
    <div className={style.blogs}>
      {blogs.map(
        (blog) => (
          <BlogPreview {...blog} /> //spread operator passes in all fields as props
        ) 
      )}
    </div>
  );
}
