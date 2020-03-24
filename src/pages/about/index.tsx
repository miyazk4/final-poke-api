import React from "react";
import PokeApi from "./pokeapi";
import AboutMe from "./aboutme";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import E404 from "../e404";

const About = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/pokeapi`} exact>
          <PokeApi />
        </Route>
        <Route path={`${match.path}/aboutme`} exact>
          <AboutMe />
        </Route>
        <Route>
          <E404 />
        </Route>
      </Switch>
    </div>
  );
};

export default About;
