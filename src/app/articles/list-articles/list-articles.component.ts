import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles: any;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(
      result => {
        this.articles = result
      },
      error => {
        console.log(error)
      }
    )
  }
  deleteArticle(id: String) {
    this.articleService.deleteArticleById(id).subscribe(
      result => {
        window.location.reload()
      },
      error => {
        console.log(error)
      }
    )
  }


}
