import React from "react";
import styles from "./pokeapi.module.scss";

const PokeApi = () => {
  return (
    <main>
      <div className={styles.mainContainer}>
        <h1>About</h1>
        <div className={styles.informationContainer}>
          <h2 className={styles.subTitle}>What is this?</h2>
          <div className={styles.informationBox}>
            <p className={styles.information}>
              This website provides a RESTful API interface to highly detailed
              objects built from thousands of lines of data related to Pokémon.
              We specifically cover the video game franchise. Using this
              website, you can consume information on Pokémon, their moves,
              abilities, types, egg groups and much, much more.
            </p>
          </div>
        </div>
        <div className={styles.informationContainer}>
          <h2 className={styles.subTitle}>
            Aren't there 101 other Pokémon websites already? ?
          </h2>
          <div className={styles.informationBox}>
            <p className={styles.information}>
              Yes and that's exactly the problem!
            </p>
            <p className={styles.information}>
              101 instances of the same website means 101 instances of the same
              data.
            </p>
          </div>
        </div>
        <div className={styles.informationContainer}>
          <h2 className={styles.subTitle}>
            Aren't there 101 other Pokémon websites already? ?
          </h2>
          <div className={styles.informationBox}>
            <p className={styles.information}>
              An API (Application Programming Interface) is a contract that
              allow developers to interact with an application through a set of
              interfaces. In this case, the application is a database of
              thousands of Pokémon-related objects, and the interfaces are URL
              links.
            </p>
            <p className={styles.information}>
              An API (Application Programming Interface) is a contract that
              allow developers to interact with an application through a set of
              interfaces. In this case, the application is a database of
              thousands of Pokémon-related objects, and the interfaces are URL
              links.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokeApi;
