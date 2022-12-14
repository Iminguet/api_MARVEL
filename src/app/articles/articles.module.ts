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
import { ComicdetailComponent } from './comicdetail/comicdetail.component';
import { CreatordetailComponent } from './creatordetail/creatordetail.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { CharacterdetailComponent } from './characterdetail/characterdetail.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesdetailComponent } from './storiesdetail/storiesdetail.component';
import { SeriesComponent } from './series/series.component';
import { SeriesdetailComponent } from './seriesdetail/seriesdetail.component';

@NgModule({
  declarations: [
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    PaginationComponent,
    EventsComponent,
    DetailComponent,
    ComicdetailComponent,
    CreatordetailComponent,
    EventdetailComponent,
    CharacterdetailComponent,
    StoriesComponent,
    StoriesdetailComponent,
    SeriesComponent,
    SeriesdetailComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [CharactersService],
  exports: [CharactersComponent],
})
export class ArticlesModule {}
