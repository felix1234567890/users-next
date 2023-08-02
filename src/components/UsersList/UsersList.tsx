import db from "@/lib/db";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

export default async function UsersList() {
  const users = await db.user.findMany();
  return (
    <div className={styles.container}>
      <section className={styles.card__row}>
        {users.map((user, i) => {
          return <UserItem user={user} index={i + 1} />;
        })}
      </section>
    </div>
  );
}
