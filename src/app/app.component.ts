//src/app/app.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromArticle from './redux/reducer'
import * as fromAction from './redux/actions/articles'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<fromArticle.State>){
    this.store.dispatch(new fromAction.AddArticleAction({id:1,link:'http:angular.io',title:'Angular',points:0}))
    this.store.select(fromArticle.getArticles).subscribe(v => {
      console.log(v)
    })
  }}

