import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }
  getAllBlogs(){
   let data = this.http.get<any>("http://localhost:3005/product/get");
   return data;
  }

  getBlogById(id : string){
    let data = this.http.get<any>("http://localhost:3005/product/get/"+id)
    return data;
  }
  createBlog(body : any){
    let data = this.http.post<any>("http://localhost:3005/product/post",body);
    return data;
  }
  updateBlogById(id : String , body : any){
    let data = this.http.patch<any>("http://localhost:3005/product/update/"+id,body);
    return data;
  }

  deleteBlogById(id :String){
    let data = this.http.delete<any>("http://localhost:3005/product/delete/"+id);
    return data;
  }
}
