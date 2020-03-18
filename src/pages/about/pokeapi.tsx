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
              objects built from thousands of lines of data related to{" "}
              <a href="https://en.wikipedia.org/wiki/Pokemon">Pokémon</a>. We
              specifically cover the video game franchise. Using this website,
              you can consume information on Pokémon, their moves, abilities,
              types, egg groups and much, much more.
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
              101 instances of the same website means 101 instances of the{" "}
              <span className={styles.bold}>same data</span>.
            </p>
            <p className={styles.information}>
              We aim to provide a{" "}
              <span className={styles.bold}>single source of data</span> that
              any number of other websites can consume and use.
            </p>
            <p className={styles.information}>
              Often, and especially when new Pokémon games or updates are
              released, those 101+ websites take{" "}
              <span className={styles.bold}>weeks</span> to update as people
              have to enter the same information in all those different places.
            </p>
            <p className={styles.information}>
              This solves that problem. If all those sites consumed their data
              from here, they would have the exact same information that is
              updated at exactly the same time, with no errors between each
              website. The overall benefit is a better collaboration and
              consistency across all the different Pokémon websites and
              applications. It's good for all!
            </p>
          </div>
        </div>
        <div className={styles.informationContainer}>
          <h2 className={styles.subTitle}>
            How much information is stored here?
          </h2>
          <div className={styles.informationBox}>
            <p className={styles.information}>A lot.</p>
            <p className={styles.information}>
              We currently have{" "}
              <span className={styles.bold}>tens of thousands</span> of
              individual items in our database, including:
            </p>
            <ul className={styles.list}>
              <li>Moves</li>
              <li>Abilities</li>
              <li>Pokémon(including various forms)</li>
              <li>Types</li>
              <li>Egg Groups</li>
              <li>Game Versions</li>
              <li>Items</li>
              <li>Pokédexes</li>
              <li>Pokémon Evolution Chains</li>
            </ul>
            <p className={styles.information}>
              And that's just scratching the surface! To see all the different
              types of data we have, check out the{" "}
              <a href="https://pokeapi.co/docs/v2.html">docs</a>.
            </p>
          </div>
          <div className={styles.informationContainer}>
            <h2 className={styles.subTitle}>The API is missing stuff!</h2>
            <div className={styles.informationBox}>
              <p className={styles.information}>
                We know! Feel free to contribute to open issues on{" "}
                <a href="https://github.com/PokeAPI/pokeapi/">GitHub</a>.
              </p>
              <p className={styles.information}>
                Have ideas for new features? We're on Slack! Sign up{" "}
                <a href="https://pokeapi-slack-invite.herokuapp.com/">
                  right here
                </a>{" "}
                then visit our{" "}
                <a href="https://pokeapi.slack.com/">slack team</a>.
              </p>
            </div>
          </div>
          <div className={styles.informationContainer}>
            <h2 className={styles.subTitle}>So who built this?</h2>
            <div className={styles.informationBox}>
              <p className={styles.information}>
                Pokémon V1 was created by{" "}
                <a href="https://github.com/phalt">Paul Hallett</a> as a weekend
                project but it quickly became more than a weekend's worth of
                work. In{" "}
                <a href="https://phalt.github.io/posts/if-you-have-data-they-will-consume-it/">
                  December of 2014
                </a>{" "}
                Paul deprecated V1 in favor of working on V2.
              </p>
              <p className={styles.information}>
                This is where{" "}
                <a href="https://github.com/zaneadix">Zane Adickes</a> jumped
                in. Zane thought the original project was a fantastic idea and
                wanted to help it grow. With direction from Paul, Zane created
                the V2 API using an exact mirror of{" "}
                <a href="https://github.com/eevee"> Veekun's</a> data related to
                the main series of games.
              </p>
              <p className={styles.information}>
                During summer 2018, Paul decided to hand over the project to the
                community. A group of contributors came together and converted
                the API to serve static JSON files to improve performance and
                cut down on hosting costs. This website was also re-built at the
                same time. This process was completed in October 2018.
              </p>
              <p className={styles.information}>
                We have a{" "}
                <a href="https://github.com/pokeapi">GitHub organisation</a> of
                contributors that you are welcome to join!
              </p>
            </div>
          </div>
          <div className={styles.informationContainer}>
            <h2 className={styles.subTitle}>
              Where did you get all of this data?
            </h2>
            <div className={styles.informationBox}>
              <p className={styles.information}>
                We gathered the information on this site from various resources:
              </p>
              <ul className={styles.list}>
                <li>
                  <a href="https://github.com/veekun">Veekun</a> has a fantastic{" "}
                  <a href="https://veekun.com/dex">Pokedex</a> which is also an
                  open source{" "}
                  <a href="https://github.com/veekun/pokedex">project</a>{" "}
                  containing a ton of csv data. We used this to flesh out the
                  database that powers Pokéapi.
                </li>
                <li>
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">
                    Bulbapedia
                  </a>{" "}
                  has a ton of extra information that proved useful when
                  designing models and documenting resources.
                </li>
              </ul>
              <p className={styles.information}>We'd also like to thank:</p>
              <ul className={styles.list}>
                <li>
                  Laven Pillay, who scraped together most of the sprites used on
                  the site.
                </li>
                <li>
                  <a href="https://github.com/Naramsim">Alessandro Pezze</a>,
                  who worked tirelessly to add the Sun/Moon updates.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.informationContainer}>
            <h2 className={styles.subTitle}>What's the technology stack?</h2>
            <div className={styles.informationBox}>
              <p className={styles.information}>
                Up until November 2018, the API and website were built together
                in a single <a href="https://www.python.org/">Python</a> project
                using the{" "}
                <a href="https://www.djangoproject.com/">Django framework</a>{" "}
                and paired with a{" "}
                <a href="https://www.postgresql.org/">PostgresQL</a> database to
                store the data.{" "}
                <a href="https://www.django-rest-framework.org/">
                  Django REST Framework
                </a>{" "}
                was used to expose the data through a RESTful API.
              </p>
              <p className={styles.information}>
                In October 2018, the API was converted to serve static JSON
                files in a fully backwards compatible manner. This allowed
                PokéAPI to move its hosting to a cheap static hosting solution
                (Firebase Hosting + Cloudflare Caching), which increased
                performance and stability by a huge margin. At the same time,{" "}
                <a href="https://pokeapi.co/docs/v1.html">
                  support for version 1 of the API was dropped
                </a>{" "}
                and this website was converted to a static site using{" "}
                <a href="https://www.gatsbyjs.org/">Gatsby</a> (a static site
                generator for <a href="https://reactjs.org/">React</a>) and
                split off into a separate{" "}
                <a href="https://github.com/PokeAPI/pokeapi.co">project</a>.
              </p>
              <p className={styles.information}>
                The move to static hosting was solved by introducing a build
                step before deployment. This build step saves each possible
                endpoint from the Django project as a JSON file using{" "}
                <a href="https://github.com/PokeAPI/ditto">ditto</a>, and it is
                these JSON files that are served from Firebase's CDN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokeApi;
