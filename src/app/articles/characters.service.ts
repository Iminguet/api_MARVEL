import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  apiKey: string =
    '?&ts=5&apikey=3cf2caefb545a81ca97caaadf3d94029&hash=971422defcb3d60f08c8be54e5a0f13f';

  characters: string = 'characters';
  comics: string = 'comics';
  creators: string = 'creators';

  limit: number = 12;
  offSet: number = 0;

  baserUrl: string = 'https://gateway.marvel.com:443/v1/public/';

  // generalUrl: string = `${this.baserUrl}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`;

  returnCharacters() {
    return this.http.get(
      `${this.baserUrl}${this.characters}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
    );
  }

  returnComics() {
    return this.http.get(
      `${this.baserUrl}${this.comics}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
    );
  }

  returnCreators() {
    return this.http.get(
      `${this.baserUrl}${this.creators}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
    );
  }
}
