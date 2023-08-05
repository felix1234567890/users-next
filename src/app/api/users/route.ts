import db from "@/lib/db";
import { Gender, Prisma, User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let users: User[] = [];
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter");
  const perPage = Number(searchParams.get("perPage"));
  const search = searchParams.get("search");
  const skip = Number(searchParams.get("skip"));
  let query: Prisma.UserFindManyArgs = { skip: skip * perPage, take: perPage };
  if (search) {
    query = {
      ...query,
      where: { country: { contains: search, mode: "insensitive" } },
    };
  }
  switch (true) {
    case filter === "asc":
    case filter === "desc":
      users = await db.user.findMany({
        ...query,
        orderBy: { age: filter as "asc" | "desc" },
      });
      break;
    case filter === "under40":
      users = await db.user.findMany({
        ...query,
        where: { age: { lte: 40 } },
        orderBy: { age: "asc" },
      });
      break;
    case filter === "over40":
      users = await db.user.findMany({
        ...query,
        where: { age: { gt: 40 } },
        orderBy: { age: "asc" },
      });
      break;
    case filter === "male":
      users = await db.user.findMany({
        ...query,
        where: { gender: Gender.male },
      });
      break;
    case filter === "female":
      users = await db.user.findMany({
        ...query,
        where: { gender: Gender.female },
      });
      break;
    default:
      users = await db.user.findMany(query);
  }
  return NextResponse.json(users);
}
