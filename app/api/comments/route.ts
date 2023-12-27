import prisma from "@/utils/connect";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return NextResponse.json(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    // console.log(err);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 },
    );
  }
};

// CREATE A COMMENT
export const POST = async (req: Request) => {
  const { data: session }: any = useSession();

  if (!session) {
    return NextResponse.json({ error: "Not Authenticated!" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return NextResponse.json(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 },
    );
  }
};
