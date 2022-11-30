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
  charDetail: any = [];
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
      this.charDetail = result.data.results;
      console.log(this.charDetail);
    });
  }

  getCharacterId(): void {}
}
