import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }
  updateBlog(form: any) {
    let id = this.activatedRoute.params.subscribe(
      result => {
        this.blogService.updateBlogById(result['id'], form.value).subscribe(
          result => {
            this.router.navigate(['/list-blogs'])
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
