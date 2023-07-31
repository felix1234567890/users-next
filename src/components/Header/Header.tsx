"use client";
import { ChangeEvent, useState } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  const [search, setSearch] = useState<string>();
  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
      <div className={styles.header__search}>
        <input
          value={search}
          onClick={() => {}}
          name="search"
          placeholder="Search users by country"
          onChange={onChange}
        />
      </div>
    </header>
  );
};

export default Header;
