import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly url = 'http://localhost:8001/api'

  constructor(
    private http: HttpClient
  ) { }
getProduct( pro_id:string ){
  return this.http.get<any>(`${this.url}/product/sale?pro_id=${pro_id}`);
}

getproductCategory(){
  return this.http.get<any>(`${this.url}/categories`)
}
getproductTypes(){
  return this.http.get<any>(`${this.url}/types`)
}

productItem(category:any){
  return this.http.get<any>(`${this.url}/type?category=${category}`)
}

itemProducts(protype:any){
  return this.http.get<any>(`${this.url}/product?type=${protype}`)
}

}
