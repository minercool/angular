import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  getAllArticles() {
    let data = this.http.get<any>("http://localhost:3005/product/get");
    return data;
  }

  createArticle(body: any) {
    let data = this.http.post<any>("http://localhost:3005/product/post", body);
    return data;
  }

  deleteArticleById(id: String) {
    
    let data = this.http.delete<any>("http://localhost:3005/product/delete/" + id);
    return data;
  }

  getArticleById(id: string) {
    let data = this.http.get<any>("http://localhost:3005/product/get/" + id)
    return data;
  }

}

