import React, { useState } from "react";
import styles from "./hamburgerMenu.module.scss";
import Navigation from "./navigation";
import cn from "classnames";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        className={cn(styles.hamburgerMenu, { [styles.change]: open })}
        onClick={toggle}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      <Navigation open={open} />
    </div>
  );
};

export default Hamburger;
