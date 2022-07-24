import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(private articleService : ArticleService , private router : Router) { }

  ngOnInit(): void {
  }
  addArticle(form : any){
    this.articleService.createArticle(form.value).subscribe(
      result =>{
        this.router.navigate(['/list-articles'])
      },
      error =>{
        console.log(error)
      }
    )
  }


}
