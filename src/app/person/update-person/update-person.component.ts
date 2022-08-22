import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  constructor(private activatedRouter : ActivatedRoute , private router : Router, private personService : PersonService) { }

  ngOnInit(): void {
  }
update(body : any){
  this.activatedRouter.params.subscribe(
    result =>{
      this.personService.updatePersonById(result['id'],body.value).subscribe(
        result =>{
          this.router.navigate(['/list-persons'])
          Swal.fire({
           
            icon: 'success',
            title: 'Updated',
            showConfirmButton: false,
            timer: 1500
          })
        },
        error=>{
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
