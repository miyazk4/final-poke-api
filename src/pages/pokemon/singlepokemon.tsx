import React, { useState, useEffect } from "react";
import { PokeData } from "./";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import Pokemons from "./pokemons";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

interface Ability {
  name: string;
}

const Pokemon = () => {
  let { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokeData>();
  const [abilities, setAbilities] = useState<Ability[]>();

  const fetchPokemon = async (_: string) => {
    const pok = await GET<PokeData>(pokemonUrl + "/" + id);
    setPokemon(pok);

    const abi = await Promise.all(
      pok.abilities.map(ab => GET<Ability>(ab.ability.url))
    );
    setAbilities(abi);
  };
  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  console.log(pokemon);

  return (
    <div>
      <h1>future poke</h1>
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
  );
};

export default Pokemon;
