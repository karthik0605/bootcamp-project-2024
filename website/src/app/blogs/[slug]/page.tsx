import React from "react";
import style from "../blogs.module.css"; //change import
import Image from "next/image";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
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
export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <header className={style.blogs}>
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
      <h1 className="page-title">{blog.title}</h1>
      <h3 className={style.date}>{formattedDate}</h3>
      <div>
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          width={500}
          height={500}
        ></Image>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
