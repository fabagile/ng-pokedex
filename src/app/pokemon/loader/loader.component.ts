import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
})
export class LoaderComponent implements OnInit {
  pokemon: Pokemon;

  constructor() {}

  ngOnInit(): void {}
}
