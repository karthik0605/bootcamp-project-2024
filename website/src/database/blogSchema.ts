import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type Blog = {
  title: string;
  slug: string;
  date: Date;
  image: string;
  imageAlt: string;
  description: string; // for preview
  content: string; // for individual blog page
  comments: IComment[]; // array for comments
};

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  image: { type: String, required: false },
  imageAlt: { type: String, required: false },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true, default: new Date() },
    },
  ],
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;

