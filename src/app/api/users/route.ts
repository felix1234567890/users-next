import db from "@/lib/db";
import { Gender, User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let users: User[] = [];
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter");
  const perPage = Number(searchParams.get("perPage"))
  const skip = Number(searchParams.get("skip"))

  switch (true) {
    case filter === "asc":
    case filter === "desc":
      users = await db.user.findMany({
        orderBy: { age: filter as "asc" | "desc" },
      });
      break;
    case filter === "under40":
      users = await db.user.findMany({
        where: { age: { lte: 40 } },
        orderBy: { age: "asc" },
      });
      break;
    case filter === "over40":
      users = await db.user.findMany({
        where: { age: { gt: 40 } },
        orderBy: { age: "asc" },
      });
      break;
    case filter === "male":
      users = await db.user.findMany({
        where: { gender: Gender.male },
      });
      break;
    case filter === "female":
      users = await db.user.findMany({
        where: { gender: Gender.female },
      });
      break;
    default:
      users = await db.user.findMany({skip: skip * perPage, take: perPage });
  }
  return NextResponse.json(users);
}
