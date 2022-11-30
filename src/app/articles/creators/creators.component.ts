import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss', '../../app.component.scss'],
})
export class CreatorsComponent {
  constructor(private creatorsData: CharactersService) {}

  creatorsArray: any = null;

  ngOnInit() {
    this.creatorsData
      .returnCreators()
      .subscribe((creator) => (this.creatorsArray = creator));
  }
}
