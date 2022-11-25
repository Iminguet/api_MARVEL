import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  apiKey: string =
    '?&ts=5&apikey=3cf2caefb545a81ca97caaadf3d94029&hash=971422defcb3d60f08c8be54e5a0f13f';

  limit: string = '5';
  offSet: string = '7';

  baserUrlCharacter: string =
    'https://gateway.marvel.com:443/v1/public/characters';

  // generalUrl: string = `${this.baserUrl}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`;

  returnCharacter() {
    return this.http.get(
      `${this.baserUrlCharacter}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
    );
  }
}
