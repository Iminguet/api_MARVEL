import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: [
    './characterdetail.component.scss',
    '../../app.componentdetail.scss',
  ],
})
export class CharacterdetailComponent implements OnInit {
  character: any = {};

  comicsDetail: any = [];
  seriesDetail: any = [];
  eventsDetail: any = [];
  storiesDetail: any = [];

  series: any = [];
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
      .getCharacterId(this.id)
      .subscribe((dataChar) => (this.character = dataChar));

    this.characterData.getComicsCharacter(this.id).subscribe((result) => {
      this.comicsDetail = result.data.results;
      console.log(this.comicsDetail);
    });

    this.characterData.getSeriesCharacter(this.id).subscribe((result) => {
      this.seriesDetail = result.data.results;
      console.log(this.seriesDetail);
    });

    this.characterData.getEventsCharacter(this.id).subscribe((result) => {
      this.eventsDetail = result.data.results;
      console.log(this.eventsDetail);
    });

    this.characterData.getStoriesCharacter(this.id).subscribe((result) => {
      this.storiesDetail = result.data.results;
      console.log(this.storiesDetail);
    });
  }
}
