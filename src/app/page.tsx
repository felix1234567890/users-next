"use client";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";
import UsersList from "@/components/UsersList/UsersList";
import { useEffect, useState } from "react";

export interface Option {
  label: string;
  value: string;
}
export const options = [
  { value: "", label: "None" },
  { value: "asc", label: "Age - ascending" },
  { value: "desc", label: "Age - descending" },
  { value: "under40", label: "Age - under 40" },
  { value: "over40", label: "Age -over 40" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export default function Home() {
  const [selected, setSelected] = useState({value: options[0].value, label:options[0].label});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const url = selected.value ? `/api/users?filter=${selected.value}` :'/api/users'
      try {
        const usersData = await fetch(url);
        const users = await usersData.json();
        setUsers(users);
      } catch (error) {}
    };
    fetchUsers();
  }, [selected]);
  return (
    <>
      <Filter selected={selected.label} setSelected={setSelected} />
      <UsersList users={users} />
      <Pagination pageCount={6} pageNumber={1} />
    </>
  );
}
