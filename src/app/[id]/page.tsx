"use client";
import { trpc } from "@/utils/trpc";
import { User } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserById() {
  const { id } = useParams();
  // const [user, setUser] = useState<User>();

  let { data: user, isLoading, isFetching } = trpc.getUser.useQuery({userId:id as string});
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userData = await fetch(`/api/users/${id}`);
  //     const { user } = await userData.json();
  //     setUser(user);
  //   };
  //   fetchUser();
  // }, [id]);
  if(isLoading || isFetching) {
    return <span className="loader"></span>
  }
  return <h1>{user?.name}</h1>;
}
