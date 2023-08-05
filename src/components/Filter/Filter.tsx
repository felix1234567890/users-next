"use client";
import { options } from "@/app/page";
import { Dispatch, SetStateAction } from "react";
import Select from "../Select/Select";
import styles from "./Filter.module.css";

export interface FilterProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<{ value: string; label: string }>>;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
}

const optionsPerPage = [
  { value: 4, label: "4" },
  { value: 6, label: "6" },
  { value: 8, label: "8" },
];

export default function Filter({
  selected,
  setSelected,
  perPage,
  setPerPage,
}: FilterProps) {
  return (
    <div className={styles.sortBy}>
      <span className={styles.sortBy__span}>Sort by</span>
      <Select options={options} selected={selected} setSelected={setSelected} />
      <Select options={optionsPerPage} selected={perPage} setSelected={setPerPage} />
    </div>
  );
}
