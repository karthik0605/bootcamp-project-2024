import mongoose, { Schema } from "mongoose";

//even this file is technically not necessary other than defining the collection/model 
//if using Blog as general structuring, only here for cuz its a requirement

//Have to define content which actually contains the content
type Project = {
  title: string;
  slug: string;
  date: Date;
  image: string;
  imageAlt: string;
  description: string; // for preview
  //content: string; // for individual blog page
  //comments: IComment[]; // array for comments
};

// mongoose schema
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  image: { type: String, required: false },
  imageAlt: { type: String, required: false },
  description: { type: String, required: true },
  //content: { type: String, required: true },
});

// defining the collection and model
const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
