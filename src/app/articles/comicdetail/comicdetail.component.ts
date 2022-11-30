import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comicdetail',
  templateUrl: './comicdetail.component.html',
  styleUrls: ['./comicdetail.component.scss', '../../app.componentdetail.scss'],
})
export class ComicdetailComponent {
  comic: any = {};

  character: any = [];
  creators: any = [];
  events: any = [];
  stories: any = [];

  id: any;

  constructor(
    private characterData: CharactersService,
    private rutaDetalle: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.rutaDetalle.snapshot.paramMap.get('id');

    this.characterData
      .getComicId(this.id)
      .subscribe((data) => (this.comic = data));

    this.characterData.getCharactersComics(this.id).subscribe((result) => {
      this.character = result.data.results;
      console.log(this.character);
    });

    this.characterData.getCreatorsComics(this.id).subscribe((result) => {
      this.creators = result.data.results;
      console.log(this.creators);
    });

    this.characterData.getEventsComics(this.id).subscribe((result) => {
      this.events = result.data.results;
      console.log(this.events);
    });

    this.characterData.getStoriesComics(this.id).subscribe((result) => {
      this.stories = result.data.results;
      console.log(this.stories);
    });
  }

  getCharacterId(): void {}
}
