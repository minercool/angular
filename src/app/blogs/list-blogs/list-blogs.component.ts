import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {
  blogs : any;
  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(
      (result)=>{
        this.blogs = result;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
deleteBlog(id : String){
  this.blogService.deleteBlogById(id).subscribe(
    result =>{
      window.location.reload();
    },
    error =>{
      console.log(error)
    }
  )
}
  

}
