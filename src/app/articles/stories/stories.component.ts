import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss', '../../app.component.scss'],
})
export class StoriesComponent {
  constructor(private eventsData: CharactersService) {}

  storiesArray: any = null;

  ngOnInit() {
    this.eventsData
      .returnStories()
      .subscribe((event) => (this.storiesArray = event));
  }
}
