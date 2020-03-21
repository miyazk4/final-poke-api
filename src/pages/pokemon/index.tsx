import React, { useState, useEffect } from "react";
import Pokemons from "./pokemons";
import "./pokemons.scss";
import { GET } from "../../utils/http";
//import Pagination from "./pokepagination";

export interface PokeData {
  name: string;
  url?: string;
  base_experience?: number;
  types: Types[];
  abilities: { ability: Result }[];
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    back_default?: string;
  };
  id: number;
  forms: Forms[];
  species: Species;
}

interface Forms {
  name: string;
  url: string;
}

interface Species {
  name: string;
  url: string;
}

interface Types {
  slot?: number;
  type: {
    name: string;
  };
}

interface Result {
  name: string;
  url: string;
}
// url pq ele há de ter o pokemon.url, tal como tem o pokemon.name

/*
async function fetchAllPokemons(url: string): Promise<PokeResult[]> {
    const list = await GET(url);
    return await Promise.all(list.map(pk => GET(pk.url)));
}
fetchAllPokemons('https://pokeurl ')

*/

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
const PokePage = () => {
  const [pokemonData, setPokemonData] = useState<PokeData[]>([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokeData(pokemonUrl);
  }, []);

  const getPokeData = async (url: string) => {
    setLoading(true);
    const data = await GET(url);
    setNextUrl(data.next);
    setPrevUrl(data.previous);

    console.log(data.results);

    const pokeRecord: PokeData[] = await Promise.all(
      data.results.map((pk: any) => GET(pk.url))
    );

    console.log(pokeRecord);

    setPokemonData(pokeRecord);
    setLoading(false);
  };

  const next = () => getPokeData(nextUrl);
  const prev = () => getPokeData(prevUrl);

  return (
    <div className="pageContainer">
      {loading ? (
        <h1 className="title">Waiting to load them all...</h1>
      ) : (
        <div>
          <h1 className="title">Gotta catch them all!</h1>
          <div className="btnContainer">
            <button className="pokeBtn" onClick={prev} disabled={!prevUrl}>
              Previous
            </button>
            <button className="pokeBtn" onClick={next} disabled={!nextUrl}>
              Next
            </button>
          </div>
          <div className="pokeData">
            {pokemonData.map(pokemon => (
              <Pokemons pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
          <div className="btnContainer">
            <button className="pokeBtn" onClick={prev} disabled={!prevUrl}>
              Previous
            </button>
            <button className="pokeBtn" onClick={next} disabled={!nextUrl}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Pokemon = {pokemon} pq contém tudo, escusa de estar name = {pokemon name} etc

export default PokePage;
