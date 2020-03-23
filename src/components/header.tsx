import React, { useState } from "react";
import cn from "classnames";
import pokeLogo from "../images/pokeapi_256.png";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Navigation from "./navigation";
import Hamburger from "./hamburgerMenu";

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
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
