import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { productResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  
})
export class ProductComponent implements OnInit {
  
  products:Product[] = []
  dataLoaded = false;
  apiUrl = "https://localhost:44314/api/products/getall";
  productResponseModel: productResponseModel={
    data :this.products,
    message:"",
    success:true

  }
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    console.log("")
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  }


}
