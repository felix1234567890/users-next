import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

interface UsersListProps {
  users: any[];
}

export default function UsersList() {
  const users = [
    {
      name: "Nando Jeurissen",
      email: "nando.jeurissen@example.com",
      country: "Netherlands",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
      gender: "male",
      age: 52,
    },
    {
      name: "Nando Jeurissen",
      email: "nando.jeurissen@example.com",
      country: "Netherlands",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
      gender: "male",
      age: 52,
    },
  ] as const;
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
