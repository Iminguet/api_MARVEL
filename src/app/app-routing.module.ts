import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './user-access/login-form/login-form.component';
import { RegisterFormComponent } from './user-access/register-form/register-form.component';
import { CharactersComponent } from './articles/characters/characters.component';
import { ComicsComponent } from './articles/comics/comics.component';
import { CreatorsComponent } from './articles/creators/creators.component';
import { EventsComponent } from './articles/events/events.component';
// import { DetailComponent } from './articles/detail/detail.component';
import { CharacterdetailComponent } from './articles/characterdetail/characterdetail.component';
import { ComicdetailComponent } from './articles/comicdetail/comicdetail.component';
import { CreatordetailComponent } from './articles/creatordetail/creatordetail.component';
import { EventdetailComponent } from './articles/eventdetail/eventdetail.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'detail/:id', component: CharacterdetailComponent },
  { path: 'detailcomic/:id', component: ComicdetailComponent },
  { path: 'detailcreator/:id', component: CreatordetailComponent },
  { path: 'detailevent/:id', component: EventdetailComponent },
  { path: 'about', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
