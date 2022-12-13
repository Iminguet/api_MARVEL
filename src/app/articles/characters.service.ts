import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  stories: string = 'stories';
  series: string = 'series;';
  id: number = 0;
  limit: number = 15;
  offSet: number = 0;

  baserUrl: string = 'https://gateway.marvel.com:443/v1/public/';

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

  returnStories() {
    return this.http.get(
      `${this.baserUrl}${this.stories}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
    );
  }

  returnSeries() {
    return this.http.get(
      `${this.baserUrl}${this.series}${this.apiKey}&limit=${this.limit}&offset=${this.offSet}`
    );
  }

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

  getStoriesId(id: number) {
    return this.http.get(`${this.baserUrl}${this.stories}/${id}${this.apiKey}`);
  }

  getSeriesId(id: number) {
    return this.http.get(`${this.baserUrl}${this.series}/${id}${this.apiKey}`);
  }

  // NOTE CHARACTERS ID
  getComicsCharacter(characterId: string): Observable<any> {
    const comicCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics${this.apiKey}`;
    return this.http.get(comicCharacterUrl);
  }

  getEventsCharacter(characterId: string): Observable<any> {
    const eventsCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/events${this.apiKey}`;
    return this.http.get(eventsCharacterUrl);
  }

  getSeriesCharacter(characterId: string): Observable<any> {
    const seriesCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series${this.apiKey}`;
    return this.http.get(seriesCharacterUrl);
  }

  getStoriesCharacter(characterId: string): Observable<any> {
    const storiesCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/stories${this.apiKey}`;
    return this.http.get(storiesCharacterUrl);
  }

  // NOTE COMICS ID
  getCharactersComics(comicId: string): Observable<any> {
    const characterComicUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicId}/characters${this.apiKey}`;
    return this.http.get(characterComicUrl);
  }

  getCreatorsComics(comicId: string): Observable<any> {
    const creatorsComicUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicId}/creators${this.apiKey}`;
    return this.http.get(creatorsComicUrl);
  }

  getEventsComics(comicId: string): Observable<any> {
    const eventsComicUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicId}/events${this.apiKey}`;
    return this.http.get(eventsComicUrl);
  }

  getStoriesComics(comicId: string): Observable<any> {
    const storiesComicUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicId}/stories${this.apiKey}`;
    return this.http.get(storiesComicUrl);
  }

  // NOTE CREATORS ID

  getComicsCreators(creatorId: string): Observable<any> {
    const comicsCreatorUrl = `https://gateway.marvel.com:443/v1/public/creators/${creatorId}/comics${this.apiKey}`;
    return this.http.get(comicsCreatorUrl);
  }

  getEventsCreators(creatorId: string): Observable<any> {
    const eventsCreatorUrl = `https://gateway.marvel.com:443/v1/public/creators/${creatorId}/events${this.apiKey}`;
    return this.http.get(eventsCreatorUrl);
  }

  getSeriesCreators(creatorId: string): Observable<any> {
    const seriesCreatorUrl = `https://gateway.marvel.com:443/v1/public/creators/${creatorId}/series${this.apiKey}`;
    return this.http.get(seriesCreatorUrl);
  }

  getStoriesCreators(creatorId: string): Observable<any> {
    const storiesCreatorUrl = `https://gateway.marvel.com:443/v1/public/creators/${creatorId}/stories${this.apiKey}`;
    return this.http.get(storiesCreatorUrl);
  }

  // NOTE EVENTS ID

  getCharactersEvents(eventId: string): Observable<any> {
    const characterEventUrl = `https://gateway.marvel.com:443/v1/public/events/${eventId}/characters${this.apiKey}`;
    return this.http.get(characterEventUrl);
  }

  getComicsEvents(eventId: string): Observable<any> {
    const comicsEventUrl = `https://gateway.marvel.com:443/v1/public/events/${eventId}/comics${this.apiKey}`;
    return this.http.get(comicsEventUrl);
  }

  getCreatorsEvents(eventId: string): Observable<any> {
    const creatorsEventUrl = `https://gateway.marvel.com:443/v1/public/events/${eventId}/creators${this.apiKey}`;
    return this.http.get(creatorsEventUrl);
  }

  getSeriesEvents(eventId: string): Observable<any> {
    const seriesEventUrl = `https://gateway.marvel.com:443/v1/public/events/${eventId}/series${this.apiKey}`;
    return this.http.get(seriesEventUrl);
  }

  getStoriesEvents(eventId: string): Observable<any> {
    const storiesEventUrl = `https://gateway.marvel.com:443/v1/public/events/${eventId}/stories${this.apiKey}`;
    return this.http.get(storiesEventUrl);
  }

  // NOTE SERIES ID

  getCharactersSerie(serieId: string): Observable<any> {
    const characterSerie = `https://gateway.marvel.com:443/v1/public/series/${serieId}/characters${this.apiKey}`;
    return this.http.get(characterSerie);
  }

  getComicsSerie(serieId: string): Observable<any> {
    const comicsSerie = `https://gateway.marvel.com:443/v1/public/series/${serieId}/comics${this.apiKey}`;
    return this.http.get(comicsSerie);
  }

  getCreatorsSerie(serieId: string): Observable<any> {
    const creatorsSerie = `https://gateway.marvel.com:443/v1/public/series/${serieId}/creators${this.apiKey}`;
    return this.http.get(creatorsSerie);
  }

  getEventSerie(serieId: string): Observable<any> {
    const eventSerie = `https://gateway.marvel.com:443/v1/public/series/${serieId}/events${this.apiKey}`;
    return this.http.get(eventSerie);
  }

  getStoriesSeries(serieId: string): Observable<any> {
    const storieSerie = `https://gateway.marvel.com:443/v1/public/series/${serieId}/stories${this.apiKey}`;
    return this.http.get(storieSerie);
  }

  // NOTE STORIES ID

  getCharactersStorie(storieId: string): Observable<any> {
    const characterStorie = `https://gateway.marvel.com:443/v1/public/stories/${storieId}/characters${this.apiKey}`;
    return this.http.get(characterStorie);
  }

  getComicsStorie(storieId: string): Observable<any> {
    const comicsStorie = `https://gateway.marvel.com:443/v1/public/stories/${storieId}/comics${this.apiKey}`;
    return this.http.get(comicsStorie);
  }

  getCreatorsStorie(storieId: string): Observable<any> {
    const creatorStorie = `https://gateway.marvel.com:443/v1/public/stories/${storieId}/creators${this.apiKey}`;
    return this.http.get(creatorStorie);
  }

  getEventsStorie(storieId: string): Observable<any> {
    const eventStorie = `https://gateway.marvel.com:443/v1/public/stories/${storieId}/events${this.apiKey}`;
    return this.http.get(eventStorie);
  }

  getSeriesStorie(storieId: string): Observable<any> {
    const seriesStorie = `https://gateway.marvel.com:443/v1/public/stories/${storieId}/series${this.apiKey}`;
    return this.http.get(seriesStorie);
  }
}
