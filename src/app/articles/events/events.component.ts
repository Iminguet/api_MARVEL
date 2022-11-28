import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  constructor(private eventsData: CharactersService) {}

  eventsArray: any = null;

  ngOnInit() {
    this.eventsData
      .returnEvents()
      .subscribe((event) => (this.eventsArray = event));
  }
}
