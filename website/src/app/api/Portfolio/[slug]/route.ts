import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import projectSchema from "../../../../database/projectSchema";

// If { params } looks confusing, check the note below this code block
export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  const slug = (await params).slug;
  await connectDB(); // function from db.ts before

  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}
