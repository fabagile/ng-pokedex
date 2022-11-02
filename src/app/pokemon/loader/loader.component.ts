import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
})
export class LoaderComponent {
  pokemon: Pokemon;
}
