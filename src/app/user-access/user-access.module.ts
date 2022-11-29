import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserAccessModule {}
