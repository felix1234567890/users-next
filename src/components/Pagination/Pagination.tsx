"use client";
import { Dispatch, SetStateAction } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pageNumber: number;
  pageCount: number;
  changePage: Dispatch<SetStateAction<number>>;
}
export default function Pagination({
  pageNumber,
  pageCount,
  changePage,
}: PaginationProps) {
  return (
    <div className={styles.buttons}>
      {pageNumber > 0 && (
        <button
          className={styles.button}
          onClick={() => changePage(pageNumber - 1)}
        >
          Previous
        </button>
      )}
      {pageNumber < pageCount && (
        <button
          className={styles.button}
          onClick={() => changePage(pageNumber + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}
