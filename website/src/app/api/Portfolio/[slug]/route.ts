import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import projectSchema from "../../../../database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure - slugs is one of the elements of params, we are changing this

  try {
    const blog = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}