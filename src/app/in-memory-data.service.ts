import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import { POKEMONS } from './pokemon/mock-pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const pokemons = POKEMONS
    return {pokemons}
  } 

}
