import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    let data = this.http.get('http://localhost:3005/product/get')
    return data
  }
  createProduct(body : any){
    let data = this.http.post<any>("http://localhost:3005/product/post",body);
    return data;
  }
}
