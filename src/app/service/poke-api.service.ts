import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2'
  constructor(
    private http: HttpClient
  ) { }


  getListPokemon():Observable<any> {
   return this.http.get(this.url).pipe(
    tap(
      res => res
    ),
    tap(
      res => console.log(res) 
    )
   )
  }
}
