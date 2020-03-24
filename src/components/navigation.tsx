import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

interface NavigationProps {
  open: boolean;
}

const Navigation = ({ open }: NavigationProps) => {
  return (
    <nav
      className={cn(styles.navigationContainer, {
        [styles.navigationModalOpen]: open
      })}
    >
      <div className={styles.rightSide}>
        <ul className={styles.mainNav}>
          <li>
            <NavLink to="/" activeClassName={styles.activeLink} exact={true}>
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
      </div>
    </nav>
  );
};

export default Navigation;
