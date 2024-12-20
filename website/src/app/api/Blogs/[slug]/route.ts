import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import blogSchema from "../../../../database/blogSchema";

/*type IParams = {
  params: {
    slug: string;
  };
}; 
*/

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
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
