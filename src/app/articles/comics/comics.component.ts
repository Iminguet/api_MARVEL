import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent {
  constructor(private characterData: CharactersService) {}

  comicsArray: any = null;

  ngOnInit() {
    this.characterData
      .returnComics()
      .subscribe((character) => (this.comicsArray = character));
  }
}
