"use client";
import { options } from "@/app/page";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<{ value: string; label: string; }>>
}
export default function Select({ selected, setSelected }: SelectProps) {
  const selectDiv = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectDiv.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectDiv}
      className={styles.custom__select}
      onBlur={() => setOpen(false)}
    >
      <div
        className={`${styles.selected} ${open && `${styles.open}`}`}
        onClick={() => setOpen(!open)}
      >
        {selected}
      </div>
      <div className={`${styles.items} ${!open && `${styles.selectHide}`}`}>
        {options.map((option, i) => {
          return (
            <div
              key={i}
              className={styles.item}
              onClick={() => {
                setSelected({value: option.value, label: option.label});
                setOpen(false);
              }}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
