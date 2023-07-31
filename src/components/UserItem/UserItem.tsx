import styles from './UserItem.module.css'

interface UserItemProps {
  name: string;
  email: string;
  country: string;
  photo: string;
  gender: "male" | "female";
  age: number;
}

const UserItem = ({
  name,
  email,
  country,
  photo,
  gender,
  age,
}: UserItemProps) => {
  return (
    <article className={styles.card}>
      {photo && <img src={photo} alt="" />}
      <h3 className={styles.user__name}>{name}</h3>
      <div className={styles.user__details}>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
      </div>
    </article>
  );
};
export default UserItem;
