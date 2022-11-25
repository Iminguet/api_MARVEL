import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class callingapiService {
  constructor(private http: HttpClient) {}

  baserUrl: string = 'https://gateway.marvel.com:443/v1/public/';

  option: string = 'characters';

  apiKey: string =
    '?&ts=5&apikey=3cf2caefb545a81ca97caaadf3d94029&hash=971422defcb3d60f08c8be54e5a0f13f';
  limit: string = '12';
  offSet: string = '0';

  generalUrl: string = `${this.baserUrl}${this.option}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`;

  retornar() {
    console.log(this.generalUrl);
    return this.http.get(this.generalUrl);
  }
}

// TODO
// crear métodos para cada endpoint
