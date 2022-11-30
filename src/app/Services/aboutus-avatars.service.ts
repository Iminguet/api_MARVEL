import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AboutusAvatarsService {
  userNameIsrael: string = 'Iminguet';
  constructor(private http: HttpClient) {}

  getAvatar(userName: any) {
    return this.http.get(`https://api.github.com/users/${userName}`);
  }
}
  