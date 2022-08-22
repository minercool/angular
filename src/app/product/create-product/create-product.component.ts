import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
  }

  create(body : any){
    this.productService.createProduct(body.value).subscribe(
        result=>{
          this.router.navigate(['/list-products'])
        },
        error=>{
          console.log(error)
        }
    )
  }

}
