//src/app/app.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromArticle from './redux/reducer'
import * as fromAction from './redux/actions/articles'
import { Article } from './redux/models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 id : number = 0
 article: Array<Article> = []

  constructor(private store: Store<fromArticle.State>){

    this.store.select(fromArticle.getArticles).subscribe((v: Array<Article>) => {
      this.article = v.sort((a: Article, b: Article) => {
        return b.points - a.points
      })
    })
  }

  addArticle = (val: any) => {
    this.store.dispatch(new fromAction.AddArticleAction(new Article(++this.id,val.title,val.article,0)))
  }
}
