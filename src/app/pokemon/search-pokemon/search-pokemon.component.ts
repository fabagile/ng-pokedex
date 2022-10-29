import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>()
  pokemons$: Observable<Pokemon[]>
  // pokemon: Pokemon
  constructor(
    private router:Router,
    private pokemonService:PokemonService
    // private pokemon:Pokemon
  ) { }

  ngOnInit():void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term=> this.pokemonService.searchPokemonList(term))
    )
  }

  search(term:string) {
    this.searchTerms.next(term)
  }
  goToDetail(pokemon:Pokemon) {
    const link = ['/pokemon/', pokemon.id]
    this.router.navigate(link)
  }

}
