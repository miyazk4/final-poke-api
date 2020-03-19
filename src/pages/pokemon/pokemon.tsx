import React from "react";
import { PokeData } from "./index";

interface PokeProps {
  pokemon: PokeData;
}

const Pokemon = ({ pokemon }: PokeProps) => {
  return (
    <div className="pokeContainer">
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h1>{pokemon.name}</h1>
      <div>
        {pokemon.types.map((type: any) => (
          <li>{type.type.name}</li>
        ))}
      </div>
      <div>{pokemon.weight}</div>
      <div>{pokemon.height}</div>
      <div>
        {pokemon.abilities.map((ability: any) => (
          <p>{ability.ability.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
