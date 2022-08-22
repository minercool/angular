import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http : HttpClient) { }

  getAllPersons(){
    let data = this.http.get<any>("http://localhost:3005/product/get");
    return data
  }
  deletePersonbyId(id :String){
    let data = this.http.delete<any>("http://localhost:3005/product/delete/"+id);
    return data;

  }
  createPerson(body : any){
    let data = this.http.post<any>("http://localhost:3005/product/post",body);
    return data;
  }
  getPersonById(id: String){
    let data = this.http.get<any>("http://localhost:3005/product/get/"+id)
    return data;
  }
  updatePersonById(id : string, body : any){
    let data = this.http.patch<any>("http://localhost:3005/product/update/"+id,body);
    return data;
  }
}
