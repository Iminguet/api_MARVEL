import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginModule } from './login/login.module';
import { CharactersComponent } from './articles/characters/characters.component';
import { ComicsComponent } from './articles/comics/comics.component';
import { CreatorsComponent } from './articles/creators/creators.component';
import { EventsComponent } from './articles/events/events.component';
import { DetailComponent } from './articles/detail/detail.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
