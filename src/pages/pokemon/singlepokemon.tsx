import React, { useState, useEffect } from "react";
import { PokeData } from "../../interfaces";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
//import Pokemons from "./pokemons";
import styles from "./pokemon.module.scss";
import typeColors from "./pokemonTypes";
import E404 from "../e404";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

const Pokemon = () => {
  let { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokeData>();
  const [error, setError] = useState(false);
  // const [abilities, setAbilities] = useState<Ability[]>();

  const fetchPokemon = async (_: string) => {
    try {
      const pok = await GET<PokeData>(pokemonUrl + "/" + id);
      setPokemon(pok);
      console.log(pok);
    } catch (e) {
      setError(true);
    }

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
    <div className={styles.pokeWrapper}>
      {error ? (
        <E404 />
      ) : pokemon ? (
        <div className={styles.pokeContainer}>
          <h1 className={styles.pokeNumber}>Pokemon No.{pokemon?.id}</h1>
          <div className={styles.pokeImageContainer}>
            <img
              className={styles.pokeImage}
              src={pokemon?.sprites.front_default}
              alt={pokemon?.name}
            />
          </div>
          <h2 className={styles.pokeName}>{pokemon?.name}</h2>
          <ul className={styles.pokeTypeContainer}>
            {pokemon?.types.map(type => (
              <li
                className={styles.pokeType}
                style={{ backgroundColor: typeColors[type.type.name] }}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
          <div className={styles.pokeDetailContainer}>
            <span className={styles.pokeDetail}>Weight: {pokemon?.weight}</span>
          </div>
          <div className={styles.pokeDetailContainer}>
            <span className={styles.pokeDetail}>
              Height: <span>{pokemon?.height}</span>
            </span>
          </div>
          <div className={styles.pokeDetailContainer}>
            <ul>
              <span className={styles.pokeDetail}>Abilities:</span>
              {pokemon?.abilities.map(ab => (
                <li>{ab.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.pokeDetailContainer}>
            {pokemon?.forms.map(f => (
              <p>
                {" "}
                <span className={styles.pokeDetail}>Form:</span>
                <p className={styles.pokeDetailForm}>{f.name}</p>
              </p>
            ))}
          </div>
          <div className={styles.pokeDetailContainer}>
            <p>
              <span className={styles.pokeDetail}>Specie:</span>
              <p className={styles.pokeDetailForm}>{pokemon?.species.name}</p>
            </p>
          </div>
        </div>
      ) : (
        <h1>Loading pokemon...</h1>
      )}
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
