import db from "@/lib/db";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return new NextResponse("No user with ID found", { status: 404 });
  }

  return NextResponse.json({ user });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await db.user.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
