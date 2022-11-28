import { Component } from '@angular/core';
import { callingapiService } from 'src/app/callingapi.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  articles: any = null;

  // TODO este constructor habrá de llamar a la api y devolver solo carácteres.
  // Habrá que hacer un string que llame a cada endpoint

  constructor(private articlesCall: callingapiService) {}

  ngOnInit() {
    this.articlesCall.retornar().subscribe((arg) => (this.articles = arg));
  }
}
