import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../database/db";
import blogSchema from "../../../../../database/blogSchema";
//import { IParams } from "../route";
//import { IComment } from "../../../../../database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  const body = await req.json();
  const slug = await params;

  if (!body) {
    return NextResponse.json("Blog not found");
  }

  await connectDB();

  try {
    const post = await blogSchema.findOne(slug).orFail();
    const comment = {...body}
    post.comments.push(comment);
    await post.save();

    return NextResponse.json("Comment successfull", { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json("Comment unsuccessfull");
  }
}
