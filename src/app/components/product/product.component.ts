import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = []
  apiUrl = "https://localhost:44314/api/products/getall";
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    console.log("İnit çalıştı");
  }
  getProducts(){
    this.httpClient.get(this.apiUrl);

  }

}
