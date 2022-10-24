import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  getPokemonList = (): Pokemon[] => POKEMONS;
  getPokemonById = (pokemonId: number): Pokemon | undefined =>
    POKEMONS.find((pokemon) => pokemon.id == pokemonId);
  getPokemonTypeList = (): string[] => [
    // "Combat",
    "Eau",
    "Electrik",
    "Feu",
    "Fée",
    "Insecte",
    "Normal",
    "Plante",
    "Poison",
    "Psy",
    "Vol",
  ];
}
