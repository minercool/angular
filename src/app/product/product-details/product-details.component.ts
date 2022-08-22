import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) { }
  product : any
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(
    result=>{
      this.productService.getProductById(result['id']).subscribe(
        result=>{
          this.product = result;
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
