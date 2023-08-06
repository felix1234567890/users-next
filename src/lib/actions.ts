"use server";
import { Gender, Prisma, User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import db from "./db";
export async function getUsersAction({
  filter,
  search,
  skip,
  perPage,
  path,
}: {
  filter: string;
  search: string;
  skip: number;
  perPage: number;
  path: string;
}) {
    await getUsers(filter, search, skip, perPage)
    revalidatePath(path)
}
async function getUsers(
  filter: string,
  search: string,
  skip: number,
  perPage: number
) {
  let users: User[] = [];
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
  return users;
}
export async function deleteUserAction({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  await deleteUser(id);
  revalidatePath(path);
}
async function deleteUser(id: string) {
  try {
    await db.user.delete({ where: { id } });
  } catch (error) {
    return { error };
  }
}
