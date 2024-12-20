import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../database/db";
import blogSchema from "../../../../../database/blogSchema";

export async function POST(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  const body = await req.json();
  const slug = (await params).slug;

  if (!body) {
    return NextResponse.json("Blog not found");
  }

  await connectDB();

  try {
    const post = await blogSchema.findOne({ slug }).orFail();
    const comment = { ...body };
    post.comments.push(comment);
    await post.save();

    return NextResponse.json("Comment successfull", { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json("Comment unsuccessfull");
  }
}
