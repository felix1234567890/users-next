import db from "@/lib/db";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let users: User[] = [];
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter") ?? "";
  switch (true) {
    case filter === "":
      users = await db.user.findMany();
      break;
    case filter === "asc":
      users = await db.user.findMany({ orderBy: { age: "asc" } });
      break;
  }
  return NextResponse.json(users);
}
