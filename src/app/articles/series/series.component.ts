import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss', '../../app.componentdetail.scss'],
})
export class SeriesComponent {
  constructor(private eventsData: CharactersService) {}

  seriesArray: any = null;

  ngOnInit() {
    this.eventsData
      .returnSeries()
      .subscribe((event) => (this.seriesArray = event));
  }
}
