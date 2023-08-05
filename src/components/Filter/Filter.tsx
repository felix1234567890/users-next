"use client";
import { Dispatch, SetStateAction } from "react";
import Select from "../Select/Select";
import styles from "./Filter.module.css";

export interface FilterProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<{ value: string; label: string }>>;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
}

export default function Filter({
  selected,
  setSelected,
  perPage,
  setPerPage,
}: FilterProps) {
  return (
    <div className={styles.sortBy}>
      <span className={styles.sortBy__span}>Sort by</span>
      <Select selected={selected} setSelected={setSelected} />
      <Select selected={perPage} setSelected={setPerPage} />
    </div>
  );
}
