import React from "react";
import { Link } from "react-router-dom";
import { PokeData } from "../../interfaces";
import typeColors from "./pokemonTypes";
import styles from "./pokemons.module.scss";

export interface PokeProps {
  pokemon: PokeData;
}

// <li style={{backgroundColor: }}></li>

const Pokemons = ({ pokemon }: PokeProps) => {
  return (
    <div className={styles.pokeWrapper}>
      <div className={styles.pokeContainer}>
        <h1 className={styles.pokeNumber}>Pokemon No.{pokemon.id}</h1>
        <div className={styles.pokeImageContainer}>
          <img
            className={styles.pokeImage}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <h1 className={styles.pokeName}>{pokemon.name}</h1>
        <div className={styles.pokeType}>
          <ul>
            {pokemon.types.map((type: any) => (
              <li style={{ backgroundColor: typeColors[type.type.name] }}>
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pokeDetailContainer}>
          <span className={styles.pokeDetail}>Weight</span>:
          <span>{pokemon.weight}</span>
        </div>
        <div className={styles.pokeDetailContainer}>
          <span className={styles.pokeDetail}>Height</span>:
          <span>{pokemon.height}</span>
        </div>
        <div className={styles.pokeDetailContainer}>
          <span className={styles.pokeDetail}>Abilities</span>:
          {pokemon.abilities.map((ability: any) => (
            <p>{ability.ability.name}</p>
          ))}
        </div>
        <div className={styles.pokeDetailBtnContainer}>
          <button type="button" className={styles.pokeDetailBtn}>
            <Link to={{ pathname: `pokemon/${pokemon.name}` }}>Detail</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
