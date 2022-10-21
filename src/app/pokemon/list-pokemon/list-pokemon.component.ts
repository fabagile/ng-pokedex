import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from "../mock-pokemon";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(POKEMONS);
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  selectPokemonById(pokemonId: number) {
    const id = pokemonId;
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez sélectionné ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokemon inexstant`);
      this.pokemonSelected = undefined;
    }
  }

  goToPokemon(pokemon:Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }

  // selectPokemon(pokemonId: string)  {
  //   const id = +pokemonId
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)

  //   if(pokemon) {
  //     console.log(`Vous avez sélectionné ${pokemon.name}`)
  //     this.pokemonSelected = pokemon

  //   } else {
  //     console.log(`Vous avez demandé un pokemon inexstant`)
  //     this.pokemonSelected = undefined

  //   }
}
