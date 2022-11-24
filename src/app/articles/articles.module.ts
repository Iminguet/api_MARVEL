import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [ArticleComponent, DetalleComponent],
  imports: [CommonModule, HttpClientModule],
})
export class ArticlesModule {}
