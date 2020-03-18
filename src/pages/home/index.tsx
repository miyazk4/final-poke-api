import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <main>
        <div className="bannerContainer">
          <div className="banner">
            <h1>PokéAPI</h1>
            <h2>The RESTful Pokémon API</h2>
            <p>Serving over 17,000,000 API calls each month!</p>
          </div>
        </div>
        <div className="checkDocsContainer">
          <div className="checkDocs">
            <p>
              All the Pokémon data you'll ever need in one place, easily
              accessible through a modern RESTful API.
            </p>
            <p>
              <Link to="/">Check out the docs!</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
