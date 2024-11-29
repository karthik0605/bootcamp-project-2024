import React from "react";
import style from "./blogs.module.css";
//import blogs from "../blogData";
import BlogPreview from "../../components/blogPreview";
import Blog from "../../database/blogSchema";
import connectDB from "../../database/db";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blogs() {
  const blogs = await getBlogs();
  if (!blogs) {
    return (
      <header className={style.blogs}>
        <p>No blogs found</p>
      </header>
    );
  }
  return (
    <header className={style.blogs}>
      <h1 className="page-title">Blogs</h1>
      <div className={style.blogs}>
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog.toObject()} />
        ))}
      </div>
    </header>
  );
}
