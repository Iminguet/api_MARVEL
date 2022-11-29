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
  events: string = 'events';
  id: number = 1011334;
  limit: number = 16;
  offSet: number = 50;

  baserUrl: string = 'https://gateway.marvel.com:443/v1/public/';

  // nextPage() {
  //   this.offSet += this.limit;
  // }
  // previusPage() {
  //   this.offSet -= this.limit;
  // }

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

  returnEvents() {
    return this.http.get(
      `${this.baserUrl}${this.events}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
    );
  }

  // getCharacterId(id: number) {
  //   return of(
  //     `${this.baserUrl}${this.characters}/${id}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
  //   );
  // }
  getCharacterId(id: number) {
    return this.http.get(
      `${this.baserUrl}${this.characters}/${id}${this.apiKey}`
    );
  }

  getComicId(id: number) {
    return this.http.get(`${this.baserUrl}${this.comics}/${id}${this.apiKey}`);
  }

  getCreatorId(id: number) {
    return this.http.get(
      `${this.baserUrl}${this.creators}/${id}${this.apiKey}`
    );
  }

  getEventId(id: number) {
    return this.http.get(`${this.baserUrl}${this.events}/${id}${this.apiKey}`);
  }

  vamos(url: string) {
    console.log(url);
  }
  nextPage() {
    this.offSet += this.limit;
  }

  previusPage() {
    this.offSet -= this.limit;
  }
}
