import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  constructor(private personService : PersonService,private router : Router) { }

  ngOnInit(): void {
  }
  create(body : any){
    this.personService.createPerson(body.value).subscribe(
      result=>{
        this.router.navigate(['/list-persons'])
      },
      error=>{
        console.log(error)
      }
    )
  }

}
