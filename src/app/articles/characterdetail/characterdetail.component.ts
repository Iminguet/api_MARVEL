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
  }

  goToComic(comic: string) {}

  getCharacterId(): void {}
}
