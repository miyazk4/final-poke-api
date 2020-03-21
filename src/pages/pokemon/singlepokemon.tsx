import React, { useState, useEffect } from "react";
import { PokeData } from "./";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
//import Pokemons from "./pokemons";
import "./pokemon.scss";
import typeColors from "./pokemonTypes";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
/*interface Ability {
  name: string;
} */

const Pokemon = () => {
  let { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokeData>();
  // const [abilities, setAbilities] = useState<Ability[]>();

  const fetchPokemon = async (_: string) => {
    const pok = await GET<PokeData>(pokemonUrl + "/" + id);
    setPokemon(pok);
    console.log(pok);

    /*const abi = await Promise.all(
      pok.abilities.map(ab => GET<Ability>(ab.ability.url))
    );
    setAbilities(abi); */
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  console.log(pokemon);

  return (
    <div>
      <div>
        {pokemon ? (
          <div className="pokemonContainer">
            <h1>Pokemon No.{pokemon?.id}</h1>
            <div>
              <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            </div>
            <h2>{pokemon?.name}</h2>
            <div>
              {pokemon?.types.map(type => (
                <h1 style={{ backgroundColor: typeColors[type.type.name] }}>
                  {type.type.name}
                </h1>
              ))}
            </div>
            <div>Weight: {pokemon?.weight}</div>
            <div>Height: {pokemon?.height}</div>
            <div>
              Abilities:
              {pokemon?.abilities.map(ab => (
                <li>{ab.ability.name}</li>
              ))}
            </div>
            <div>
              {pokemon?.forms.map(f => (
                <p>Form:{f.name}</p>
              ))}
            </div>
            <div>
              <p>Specie:{pokemon?.species.name}</p>
            </div>
          </div>
        ) : (
          <h1>Loading pokemon...</h1>
        )}
      </div>
    </div>
  );
};

/*
  <div>
        <h1>Pokemon</h1>
        {pokemon ? (
          <Pokemons pokemon={pokemon} key={pokemon.name} />
        ) : (
          "loading pokemon"
        )}
        <ul>
          {abilities ? (
            abilities.map(ab => <li key={ab.name}>{ab.name}</li>)
          ) : (
            <li>loading abilities</li>
          )}
        </ul>
      </div> 
  */

export default Pokemon;
