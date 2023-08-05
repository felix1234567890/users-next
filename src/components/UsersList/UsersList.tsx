'use client'
import { User } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";
interface UsersListProps {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>
}
export default function UsersList({ users, setUsers}: UsersListProps) {
  return (
    <div className={styles.container}>
      <section className={styles.card__row}>
        {users.map((user, i) => {
          return <UserItem user={user} users={users} setUsers={setUsers} index={i + 1} key={i} />;
        })}
      </section>
    </div>
  );
}
