import React from "react";
import PokeApi from "./pokeapi";
import AboutMe from "./aboutme";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const About = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/pokeapi`}>
          <PokeApi />
        </Route>
        <Route path={`${match.path}/aboutme`}>
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
};

export default About;
