import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private productService : ProductService) { }
  products :any 
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      result =>{
        this.products = result
      },
      error=>{
        console.log(error)
      }
    )
  }
  delete(product : any){

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
        this.productService.deleteProductById(product['_id']).subscribe(
          result =>{
            this.products.splice(this.products.indexOf(product),1)

          },
          error=>{
            console.log(error)
          }
        )
      }
    })
    
  }

}
