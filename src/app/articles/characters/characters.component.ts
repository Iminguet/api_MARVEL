import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  constructor(private characterData: CharactersService) {}

  characterArray: any = null;

  ngOnInit() {
    this.characterData
      .returnCharacters()
      .subscribe((character) => (this.characterArray = character));
  }
}
