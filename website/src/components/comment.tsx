import React from "react";
import { IComment } from "../database/blogSchema";
import style from "./comment.module.css";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  var date = time.toLocaleString();
  return date;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.commentCard}>
      <div className={style.commentHeader}>
        <h4 className={style.user}>{comment.user}</h4>
        <span className={style.time}>
          {parseCommentTime(new Date(comment.time))}
        </span>
      </div>
      <p className={style.commentContent}>{comment.comment}</p>
    </div>
  );
}

export default Comment;
