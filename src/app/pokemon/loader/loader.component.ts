import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
//   template: `
//   <h4 *ngIf="!pokemon" class="progress">
//   <div class="indeterminate"></div>
// </h4>

//   `,
  styles: [
  ]
})
export class LoaderComponent implements OnInit {
  pokemon:Pokemon

  constructor() { }

  ngOnInit(): void {
  }

}
