import React from "react";
import styles from "./pokemons.module.scss";

interface PaginationProps {
  prev: () => void;
  next: () => void;
  prevUrl?: string;
  nextUrl?: string;
}

const Pagination = ({ prev, next, prevUrl, nextUrl }: PaginationProps) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.pokeBtn} onClick={prev} disabled={!prevUrl}>
        Previous
      </button>
      <button className={styles.pokeBtn} onClick={next} disabled={!nextUrl}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
