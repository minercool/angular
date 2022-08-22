import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import Swal from 'sweetalert2';
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
deleteBlog(blog : any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      this.blogService.deleteBlogById(blog['_id']).subscribe(
        result =>{
          this.blogs.splice(this.blogs.indexOf(blog,1))
        },
        error =>{
          console.log(error)
        }
      )
    }
  })
 
}
  

}
