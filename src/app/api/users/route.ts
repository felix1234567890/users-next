import db from "@/lib/db";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  let users: User[] = [];
  const filter = req.query?.filter ?? "";
  switch (true) {
    case filter === "":
      users = await db.user.findMany();
      break;
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
  }
  return NextResponse.json(users);
}
