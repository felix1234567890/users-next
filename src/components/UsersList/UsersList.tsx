import db from "@/lib/db";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

interface UsersListProps {
  users: any[];
}

export default async function UsersList() {
  const users = await db.user.findMany();
  return (
    <div className={styles.container}>
      <section className={styles.card__row}>
        {users.map((user) => (
          <UserItem user={user} />
        ))}
      </section>
    </div>
  );
}
