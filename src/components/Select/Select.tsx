"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  options: { label: string }[];
  onInput: (label:string) => void;
}
export default function Select({ options, onInput }: SelectProps) {
  const selectDiv = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(
    options.length > 0 ? options[0].label : null
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    selected && onInput(selected);
    const handleClickOutside = (event: MouseEvent) => {
      const el = document.getElementsByClassName("custom-select")[0];
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
        {options.map((option, i) => (
          <div
            key={i}
            className={styles.item}
            onClick={() => {
              setSelected(option.label);
              setOpen(false);
              onInput(option.label);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
