import React from "react";
import { PokeData } from "./index";

interface PokeProps {
  pokemon: PokeData;
}

const Pokemon = ({ pokemon }: PokeProps) => {
  return (
    <div className="pokeContainer">
      <div className="pokeImage">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h1 className="pokeName">{pokemon.name}</h1>
      <div className="pokeType">
        <ul>
          {pokemon.types.map((type: any) => (
            <li>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div className="pokeDetailContainer">
        <span className="pokeDetail">Weight</span>:<span>{pokemon.weight}</span>
      </div>
      <div className="pokeDetailContainer">
        <span className="pokeDetail">Height</span>:<span>{pokemon.height}</span>
      </div>
      <div className="pokeDetailContainer">
        <span className="pokeDetail">Abilities</span>:
        {pokemon.abilities.map((ability: any) => (
          <p>{ability.ability.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
