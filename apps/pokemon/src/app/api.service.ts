import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getList(url: any): Observable<any> {
    return this.http.get(url, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(response => this.transformPokemonList(response))
      );
  }

  getDetail(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(response => response)
      );
  }

  getSpecies(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(response => response)
      );
  }

  getPokemonDetailsAndSpecies(id: string): Observable<any> {
    return forkJoin({
      detail: this.getDetail(id),
      species: this.getSpecies(id)
    }).pipe(
      catchError(this.handleError),
      map(response => {
        return this.transformPokemonDetailsAndSpecies(response)
      })
    )
  }

  private handleError(error: any) {
    return throwError(error);
  }

  private transformPokemonList(data: any) {
    const { next, results } = data;
    return {
      next,
      results: results.map((data:any) => {
        return {
          name: data.name,
          id: data.url.split("pokemon/")[1].split("/")[0]
        }
      })
    };
  }

  private transformPokemonDetailsAndSpecies(data: any) {
    const { detail, species } = data;
    const nameObj = species.names.find((obj: any) => obj.language.name === "zh-Hant");
    const name = nameObj ? nameObj.name : species.name;
    const id = detail.id;
    return {
      types: detail.types,
      name: name,
      imgSrc: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("00" + id).slice(-3)}.png`
    };
  }
}
