'use client'
import { User } from "@prisma/client";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";
interface UsersListProps {
  users: User[];
}
export default function UsersList({ users }: UsersListProps) {
  return (
    <div className={styles.container}>
      <section className={styles.card__row}>
        {users.map((user, i) => {
          return <UserItem user={user} index={i + 1} key={i} />;
        })}
      </section>
    </div>
  );
}
