import Link from "next/link";
import styles from "./UserItem.module.css";

interface UserItemProps {
  user: {
    id: string;
    name: string;
    email: string;
    country: string;
    photo: string;
    gender: "male" | "female";
    age: number;
  };
  index: number;
}

const UserItem = ({ user }: UserItemProps) => {
  const deleteUser = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { id } = user;
    const userData = await fetch(`/api/users/${id}`, { method: "DELETE" });
    const result = await userData.json();
    console.log(result);
  };
  return (
    <Link className={styles.link} href={`/${user.id}`}>
      <article className={styles.card}>
        {user.photo && <img src={user.photo} alt="" />}
        <h3 className={styles.user__name}>{user.name}</h3>
        <div className={styles.user__details}>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <button
            className={styles.button}
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              deleteUser(event)
            }
          >
            Delete
          </button>
        </div>
      </article>
    </Link>
  );
};
export default UserItem;
