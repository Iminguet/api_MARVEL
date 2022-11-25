import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule],
=======

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ArticlesModule],

>>>>>>> main
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
