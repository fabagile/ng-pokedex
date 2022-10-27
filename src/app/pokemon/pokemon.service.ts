import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap } from "rxjs";
import { Pokemon } from "./pokemon";

type Null = Observable<null>
@Injectable()
export class PokemonService {
  // url = "api/pokemons"
  // urlById = `api/pokemons/${pokemonId}`
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[] | undefined> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.put("api/pokemons", pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, value: any) {
    console.error(error);
    return of(value);
  }
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
