'use client'
import styles from './Pagination.module.css'

interface PaginationProps {
  pageNumber: number;
  pageCount: number;
}
export default function Pagination({ pageNumber, pageCount }: PaginationProps) {
  return (
    <div className={styles.buttons}>
      {pageNumber > 1 && (
          <button className={styles.button} onClick={() => {}}>Previous</button>
      )}
      {pageNumber < pageCount && (
          <button className={styles.button} onClick={() => {}}>Next</button>
      )}
    </div>
  );
}
