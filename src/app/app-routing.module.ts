import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './user-access/login-form/login-form.component';
import { RegisterFormComponent } from './user-access/register-form/register-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  // { path: 'main', component: RegisterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
