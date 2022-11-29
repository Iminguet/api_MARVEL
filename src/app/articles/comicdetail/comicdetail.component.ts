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
  }

  getCharacterId(): void {}
}
