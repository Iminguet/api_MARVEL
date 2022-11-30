import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.scss', '../../app.componentdetail.scss'],
})
export class EventdetailComponent {
  event: any = {};
  character: any = [];
  comics: any = [];
  id: any;

  constructor(
    private characterData: CharactersService,
    private rutaDetalle: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.rutaDetalle.snapshot.paramMap.get('id');

    this.characterData
      .getEventId(this.id)
      .subscribe((dataEvent) => (this.event = dataEvent));

    this.characterData.getCharactersEvents(this.id).subscribe((result) => {
      this.character = result.data.results;
      console.log(this.character);
    });

    this.characterData.getComicsEvents(this.id).subscribe((result) => {
      this.comics = result.data.results;
    });
  }

  getCharacterId(): void {}
}
