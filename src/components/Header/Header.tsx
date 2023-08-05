"use client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}
const Header = ({ title, search, setSearch }: HeaderProps) => {
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
