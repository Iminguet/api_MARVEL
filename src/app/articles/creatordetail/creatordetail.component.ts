import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creatordetail',
  templateUrl: './creatordetail.component.html',
  styleUrls: [
    './creatordetail.component.scss',
    '../../app.componentdetail.scss',
  ],
})
export class CreatordetailComponent implements OnInit {
  creator: any = {};
  comics: any = [];
  events: any = [];
  series: any = [];
  stories: any = [];
  id: any;

  constructor(
    private characterData: CharactersService,
    private rutaDetalle: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.rutaDetalle.snapshot.paramMap.get('id');

    this.characterData
      .getCreatorId(this.id)
      .subscribe((dataCreator) => (this.creator = dataCreator));

    this.characterData.getComicsCreators(this.id).subscribe((result) => {
      this.comics = result.data.results;
      console.log(this.comics);
    });

    this.characterData.getEventsCreators(this.id).subscribe((result) => {
      this.events = result.data.results;
      console.log(this.events);
    });

    this.characterData.getSeriesCreators(this.id).subscribe((result) => {
      this.series = result.data.results;
      console.log(this.series);
    });

    this.characterData.getStoriesCreators(this.id).subscribe((result) => {
      this.stories = result.data.results;
      console.log(this.stories);
    });
  }

  getCharacterId(): void {}
}
