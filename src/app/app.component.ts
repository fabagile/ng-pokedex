import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1>Welcome to {{ title }}!</h1>
  <h2>Voici {{pokemonList[2]}}</h2>`,
  // styles: [],  
})
export class AppComponent implements OnInit {
  title = "application de pokemons";
  pokemonList = ['bulbizarre', "salameche", 'carapuce']
  ngOnInit() {
    console.table(this.pokemonList)
  }
}
