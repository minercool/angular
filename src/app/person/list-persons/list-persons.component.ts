import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import Swal from 'sweetalert2';
import { delay } from 'rxjs';
@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
  persons: any
  constructor(private personeService: PersonService) { }
  ngOnInit(): void {
    this.personeService.getAllPersons().subscribe(
      result => {
        this.persons = result;
      },
      error => {
        console.log(error)
      }
    )
  }

  delete(id: String) {
    this.personeService.deletePersonbyId(id).subscribe(
      result => {         
        setTimeout(() => {
          window.location.reload();
      }, 3000);                                        
        
      },
      error=>{
        console.log(error)
      }
    )
  }

  mainDelete(id : string){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.delete(id)
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


}
