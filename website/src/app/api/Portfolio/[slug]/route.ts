import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import projectSchema from "../../../../database/projectSchema";

type IParams = {
  params: {
    slug: string;
  };
};

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
  const { slug } = await params; // another destructure - slugs is one of the elements of params, we are changing this
  await connectDB(); // function from db.ts before

  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}
