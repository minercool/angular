import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      result => {
        this.articleService.getArticleById(result['id']).subscribe(
          result => {
            console.log(result)
          },
          error => {
            console.log(error)
          }
        )
      },
      error => {
        console.log(error)
      }
    )
  }

}
