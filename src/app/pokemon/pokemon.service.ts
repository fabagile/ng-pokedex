import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap, pipe } from "rxjs";
import { Pokemon } from "./pokemon";

const url = "api/pokemons"
// const idUrl = pokemon && `${url}/${pokemon.id}`
type Null = Observable<null>
@Injectable()
export class PokemonService {
  // url = "api/pokemons"
  // urlById = `api/pokemons/${pokemonId}`
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[] | undefined> {
    return this.http.get<Pokemon[]>(url).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`${url}/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchPokemonList(term:string): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.put(url, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`${url}/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  addPokemon(pokemon:Pokemon):Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post<Pokemon>(url, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
    // const newPokemon:Pokemon = {

    // }
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
