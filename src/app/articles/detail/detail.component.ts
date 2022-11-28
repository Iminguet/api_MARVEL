import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  character: any = {};
  comic: any = {};

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

    this.characterData
      .getCharacterId(this.id)
      .subscribe((dataChar) => (this.character = dataChar));

    console.log(this.comic);
  }

  getCharacterId(): void {}
}
