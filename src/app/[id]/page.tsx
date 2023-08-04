"use client";
import { User } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserById() {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await fetch(`/api/users/${id}`);
      const { user } = await userData.json();
      setUser(user);
    };
    fetchUser();
  }, [id]);
  return <h1>{user?.name}</h1>;
}
