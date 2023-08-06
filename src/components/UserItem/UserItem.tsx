import { deleteUserAction } from "@/lib/actions";
import { User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useTransition } from "react";
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
  setUsers: Dispatch<SetStateAction<User[]>>;
  users: User[];
}

const UserItem = ({ user, setUsers, users }: UserItemProps) => {
  const [_, startTransition] = useTransition();
  // const deleteUser = async (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   event.preventDefault();
  //   const { id } = user;
  //   await fetch(`/api/users/${id}`, { method: "DELETE" });
  //   const filtered = users.filter(({ id }) => id !== user.id);
  //   setUsers(filtered);
  // };
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
          <form>
            <button
              className={styles.button}
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                event.preventDefault();
                startTransition(() => {
                  deleteUserAction({ id: user.id, path: "/" });
                });
              }}
            >
              Delete
            </button>
          </form>
        </div>
      </article>
    </Link>
  );
};
export default UserItem;
