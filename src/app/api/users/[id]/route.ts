import db from "@/lib/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  _req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const user = await db.user.findFirstOrThrow({ where: { id } });
  return NextResponse.json({ user });
}
