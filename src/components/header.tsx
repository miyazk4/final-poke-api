import React from "react";
import pokeLogo from "../images/pokeapi_256.png";
import { NavLink, Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  const hamburger = document.querySelector(".hamburgerMenu");
  console.log(hamburger);

  const toggle = (x: any) => {
    x.classList.toggle("change");
  };

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
        <nav className={styles.navigationContainer}>
          <div className={styles.rightSide}>
            <ul className={styles.mainNav}>
              <li>
                <NavLink
                  to="/"
                  activeClassName={styles.activeLink}
                  exact={true}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.aboutNavigation}>
                <NavLink
                  to="/about"
                  activeClassName={styles.activeLink}
                  onClick={e => e.preventDefault()}
                >
                  About
                </NavLink>
                <ul className={styles.secondaryNav}>
                  <li>
                    <NavLink
                      to={`/about/pokeapi`}
                      activeClassName={styles.activeLink}
                    >
                      Poke Api
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/about/aboutme`}
                      activeClassName={styles.activeLink}
                    >
                      About Me
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/pokemon" activeClassName={styles.activeLink}>
                  Pokemon
                </NavLink>
              </li>
            </ul>
            <div className={styles.hamburgerMenu} onClick={toggle}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
