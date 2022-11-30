import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storiesdetail',
  templateUrl: './storiesdetail.component.html',
  styleUrls: [
    './storiesdetail.component.scss',
    '../../app.componentdetail.scss',
  ],
})
export class StoriesdetailComponent {
  storie: any = {};

  characterDetail: any = [];
  id: any;

  constructor(
    private characterData: CharactersService,
    private rutaDetalle: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.rutaDetalle.snapshot.paramMap.get('id');

    this.characterData
      .getStoriesId(this.id)
      .subscribe((dataEvent) => (this.storie = dataEvent));

    this.characterData.getCharactersStorie(this.id).subscribe((result) => {
      this.characterDetail = result.data.results;
    });
  }

  getCharacterId(): void {}
}
