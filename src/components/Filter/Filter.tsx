'use client'
import { Dispatch, SetStateAction } from "react";
import Select from "../Select/Select";
import styles from "./Filter.module.css";

interface FilterProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<{ value: string; label: string; }>>
}
export default function Filter({ selected, setSelected }: FilterProps) {

  return (
    <div className={styles.sortBy}>
      <span className={styles.sortBy__span}>Sort by</span>
      <Select selected={selected} setSelected={setSelected} />
    </div>
  );
}
