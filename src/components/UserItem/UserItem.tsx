import Link from "next/link";
import styles from "./UserItem.module.css";

interface UserItemProps {
  user: {
    name: string;
    email: string;
    country: string;
    photo: string;
    gender: "male" | "female";
    age: number;
  };
  index: number;
}

const UserItem = ({ user, index }: UserItemProps) => {
  return (
    <Link  style={{textDecoration: 'none'}} href={`/${index}`}>
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
        </div>
      </article>
    </Link>
  );
};
export default UserItem;
