// import { POKEMONS } from "./mock-pokemon";
export class Pokemon {
  name: string;
  id: number;
  hp: number;
  cp: number;
  picture: string;
  types: Array<string>;
  created: Date;

  constructor(
    name: string = "Entrer un nom",
    // id: number = POKEMONS.length,
    hp: number = 100,
    cp: number = 10,
    picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
    types: Array<string> = ["Normal"],
    created: Date = new Date()
  ) {
    this.name = name;
    // this.id = id;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}
