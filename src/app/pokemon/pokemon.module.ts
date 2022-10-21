import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const pokemonRoutes: Routes = [
  {path: "pokemons", component: ListPokemonComponent},
  {path: "pokemon/:id", component: DetailPokemonComponent},
]

@NgModule({
  declarations: [
    PokemonTypeColorPipe,
    BorderCardDirective,
    ListPokemonComponent,
    DetailPokemonComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
