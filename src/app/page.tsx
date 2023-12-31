"use client";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";
import UsersList from "@/components/UsersList/UsersList";
import { trpc } from "@/utils/trpc";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { usePageContext } from "./layout";

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
  const [selected, setSelected] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  const [perPage, setPerPage] = useState<number>(6);
  // const [users, setUsers] = useState<User[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const search = usePageContext();
  let { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();
  // setUsers(usersData)
  // useEffect(() => {
    
  //   // const fetchUsers = async () => {
  //   //   let url = `/api/users?perPage=${perPage}&skip=${skip}`;
  //   //   url = search ? `${url}&search=${search}` : url;
  //   //   url = selected.value ? `${url}&filter=${selected.value}` : url;
  //   //   const usersData = await fetch(url);
  //   //   const users = await usersData.json();
  //     setUsers(usersData);
  //   // fetchUsers();
  // }, [selected, skip, perPage, search]);
  if(isLoading || isFetching) {
    return <span className="loader"></span>
  }
  return (
    <>
      <Filter
        selected={selected.label}
        setSelected={setSelected}
        perPage={perPage}
        setPerPage={setPerPage}
      />
      <UsersList users={users} setUsers={()=>{}}/>
      <Pagination pageCount={perPage} pageNumber={skip} changePage={setSkip} />
    </>
  );
}
