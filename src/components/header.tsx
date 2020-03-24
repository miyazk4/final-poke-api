import React from "react";
import pokeLogo from "../images/pokeapi_256.png";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

import Hamburger from "./hamburgerMenu";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={styles.logo}>
            <Link to="/">
              <img
                className={styles.logoImage}
                src={pokeLogo}
                alt="Poke Api Logo"
              />
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
