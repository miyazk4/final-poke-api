import React from "react";
import { PokeData } from "./index";

interface PokeProps {
  pokemon: PokeData;
}

const Pokemon = ({ pokemon }: PokeProps) => {
  return <div className="pokeContainer"></div>;
};

export default Pokemon;
