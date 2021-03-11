import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productResponseModel } from 'src/app/models/productResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44314/api/products/getall";

  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<productResponseModel>{
   return this.httpClient.get<productResponseModel>(this.apiUrl);
  }
}
