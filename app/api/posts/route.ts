// import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  // const page = searchParams.get("page");
  const category = searchParams.get("category");

  // const POST_PER_PAGE = 2;

  const query = {
    // take: POST_PER_PAGE,
    // skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(category && { categorySlug: category }),
    },
  };

  try {
    const [data, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return NextResponse.json(JSON.stringify({ data, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 },
    );
  }
};

// CREATE A POST
export const POST = async (req: Response) => {
  const session = useSession();

  if (!session || session.status !== "authenticated" || !session.data?.user) {
    return NextResponse.json({ error: "Not Authenticated!" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.data.user.email },
    });

    return NextResponse.json(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 },
    );
  }
};
