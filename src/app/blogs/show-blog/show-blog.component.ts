import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute , private blogService : BlogService) { }
  blog : any
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      result =>{
        this.blogService.getBlogById(result['id']).subscribe(
          result => {
           this.blog = result;
          },
          error =>{
            console.log(error)
          }
        )
      }
    )
  }

}
