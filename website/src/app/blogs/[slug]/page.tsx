import React from "react";
import style from "./blogPage.module.css";
import Image from "next/image";
import { IComment } from "../../../database/blogSchema";
import Comment from "../../../components/comment";
import AddComment from "../../../components/addComment";
import { Key } from "react";

//need to add comment button which calls the api POST call

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`https://karthikbalaji-website.vercel.app/api/Blogs/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

//can define other stuff inside of content
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <header className={style.noBlogsFound}>
        <p>No blogs found</p>
      </header>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={style.blogPage}>
      <div className={style.blogContent}>
        <div className={style.blogHeader}>
          <h1>{blog.title}</h1>
          <h3>{formattedDate}</h3>
        </div>
        <Image
          className={style.blogImage}
          src={blog.image}
          alt={blog.imageAlt}
          width={800}
          height={400}
        />
        <p>{blog.content}</p>
      </div>

      <div className={style.commentSection}>
        <h2>Comments</h2>
        <AddComment slug = {slug}/>
        {blog.comments.length > 0 ? (
          blog.comments.map(
            (comment: IComment, index: Key | null | undefined) => (
              <Comment key={index} comment={comment} />
            )
          )
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
