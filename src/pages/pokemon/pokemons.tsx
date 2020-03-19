import React from "react";
import { Link } from "react-router-dom";
import { PokeData } from "./index";
import typeColors from "./pokemonTypes";

interface PokeProps {
  pokemon: PokeData;
}

// <li style={{backgroundColor: }}></li>

const Pokemons = ({ pokemon }: PokeProps) => {
  return (
    <div className="pokeContainer">
      <div className="pokeImage">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h1 className="pokeName">{pokemon.name}</h1>
      <div className="pokeType">
        <ul>
          {pokemon.types.map((type: any) => (
            <li style={{ backgroundColor: typeColors[type.type.name] }}>
              {type.type.name}
            </li>
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
      <div className="btnContainer">
        <button type="button" className="pokeBtn">
          <Link to={{ pathname: `pokemon/${pokemon.name}` }}>Detail</Link>
        </button>
      </div>
    </div>
  );
};

export default Pokemons;
