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
  pagination: Pagination;
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

interface Pagination {
  next: string;
  previous: null;
}
