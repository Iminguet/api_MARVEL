import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CharactersService } from './characters.service';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';

@NgModule({
  declarations: [
    ArticleComponent,
    DetalleComponent,
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [CharactersService],
  exports: [CharactersComponent],
})
export class ArticlesModule {}
