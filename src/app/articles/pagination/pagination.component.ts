import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  constructor(private service: CharactersService) {}

  // nextPage() {
  //   this.service.nextPage();
  // }

  // previusPage() {
  //   this.service.previusPage();
  // }

  ngOnInit(): void {
    // nextPage();
  }
}
