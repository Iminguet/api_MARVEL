import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesModule } from './articles/articles.module';
import { SidebarComponent } from './web-persistent/sidebar/sidebar.component';
import { WebPersistentModule } from './web-persistent/web-persistent.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArticlesModule,
    WebPersistentModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
