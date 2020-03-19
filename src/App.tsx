import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Pokemons from "./pages/pokemon";
//import Pokemon from "./pages/pokemon/singlepokemon";
/* 
<Route path="/pokemon/:id">
          <Pokemon />
        </Route>
*/

import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "./css-reset.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/pokemon">
          <Pokemons />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
