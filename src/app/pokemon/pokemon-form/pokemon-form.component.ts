import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["./pokemon-form.component.css"],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  isAddForm: boolean
  // isEditForm:boolean
  types: string[];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add')
    // this.isEditForm = this.router.url.includes('edit')
  }

  hasType(t: string): boolean {
    return this.pokemon.types.includes(t);
  }
  selectType($event: Event, t: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(t);
    } else {
      const index = this.pokemon.types.indexOf(t);
      this.pokemon.types.splice(index, 1);
    }
  }
  isTypesValid(t: string): boolean {
    const currentType = this.hasType(t);
    const typesLength = this.pokemon.types.length;
    if (typesLength == 1 && currentType) {
      return false;
    }
    if (typesLength > 2 && !currentType) {
      return false;
    }
    return true;
  }
  onSubmit() {
    // console.log("submit form !");
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon:Pokemon)=> this.router.navigate(['/pokemon', pokemon.id]))
    } else {

      this.pokemonService
        .updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(["/pokemon", this.pokemon.id]));
    }
  }
}
