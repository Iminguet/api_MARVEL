import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ArticlesModule],
=======
  imports: [BrowserModule, AppRoutingModule],
>>>>>>> main
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
