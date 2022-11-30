import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './user-access/login-form/login-form.component';
import { RegisterFormComponent } from './user-access/register-form/register-form.component';
import { CharactersComponent } from './articles/characters/characters.component';
import { ComicsComponent } from './articles/comics/comics.component';
import { CreatorsComponent } from './articles/creators/creators.component';
import { EventsComponent } from './articles/events/events.component';
import { CharacterdetailComponent } from './articles/characterdetail/characterdetail.component';
import { ComicdetailComponent } from './articles/comicdetail/comicdetail.component';
import { CreatordetailComponent } from './articles/creatordetail/creatordetail.component';
import { EventdetailComponent } from './articles/eventdetail/eventdetail.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { StoriesdetailComponent } from './articles/storiesdetail/storiesdetail.component';
import { StoriesComponent } from './articles/stories/stories.component';
import { SeriesComponent } from './articles/series/series.component';
import { SeriesdetailComponent } from './articles/seriesdetail/seriesdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'about', component: AboutusComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'detail/:id', component: CharacterdetailComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'detailcomic/:id', component: ComicdetailComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'detailcreator/:id', component: CreatordetailComponent },
  { path: 'events', component: EventsComponent },
  { path: 'detailevent/:id', component: EventdetailComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'detailstories/:id', component: StoriesdetailComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'detailseries/:id', component: SeriesdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
