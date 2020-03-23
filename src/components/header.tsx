import React, { useState } from "react";
import cn from "classnames";
import pokeLogo from "../images/pokeapi_256.png";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Navigation from "./navigation";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  /*const toggle = (x: any) => {
    x.classList.toggle("change");
  }; */

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>
            <Link to="/">
              <img src={pokeLogo} alt="Poke Api Logo" />
            </Link>
          </h1>
        </div>
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
      </div>
    </header>
  );
};

export default Header;
