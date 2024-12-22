"use client";
import React, { useState } from "react";
import style from "./comment.module.css";

export default function AddComment({ slug }: { slug: string }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://karthikbalaji-website.vercel.app/api/Blogs/${slug}/comment`,
        {
          method: "POST",
          body: JSON.stringify({ user: name, comment: comment }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        throw new Error("failed to post comment");
      }
      setName("");
      setComment("");
    } catch (err: unknown) {
      console.log(`error: ${err}`);
      return null;
    }
  };

  return (
    <div className={style.commentForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={style.inputField}
          />
          <label>Comment:</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className={style.inputField}
          />
          <button type="submit">Post Comment</button>
        </div>
      </form>
    </div>
  );
}
