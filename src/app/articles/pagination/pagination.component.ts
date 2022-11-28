import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  constructor() {
    service: CharactersService;
  }

  @Input() offset?: number;
  @Input() limit?: number;

  ngOnInit(): void {
    // nextPage();
  }
}
