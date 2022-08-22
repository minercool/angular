import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
  data : any
  constructor(private activatedRoute : ActivatedRoute , private personService : PersonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      result =>{
        this.personService.getPersonById(result['id']).subscribe(
          result =>{
            this.data = result
          },
          error =>{
            console.log(error)
          }
        )
      },
      error=>{
        console.log(error)
      }
    )
  }

}
