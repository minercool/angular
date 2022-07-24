import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(private blogService : BlogService , private router : Router) { }

  ngOnInit(): void {
  }
  createBlog(form : any){
    this.blogService.createBlog(form.value).subscribe(
      result =>{
        console.log("true");
        this.router.navigate(['/list-blogs']);
      },
      error =>{
        console.log(error);
      }
    )

  }


}
