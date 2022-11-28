import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CharactersService } from './characters.service';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { PaginationComponent } from './pagination/pagination.component';
import { EventsComponent } from './events/events.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    PaginationComponent,
    EventsComponent,
    DetailComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [CharactersService],
  exports: [CharactersComponent],
})
export class ArticlesModule {}
