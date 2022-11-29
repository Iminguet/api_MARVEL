import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creatordetail',
  templateUrl: './creatordetail.component.html',
  styleUrls: ['./creatordetail.component.scss'],
})
export class CreatordetailComponent {
  creator: any = {};

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
  }

  getCharacterId(): void {}
}
