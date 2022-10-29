import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center" >Ajout d'un pokémon</h2>
    <!-- <app-pokemon-form ></app-pokemon-form> -->
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon" ></app-pokemon-form>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon | null
  constructor() { }

  ngOnInit() {
    this.pokemon =  new Pokemon()
  }
  

}
