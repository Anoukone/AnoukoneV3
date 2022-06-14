import { UserService } from './../register/user-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typef',
  templateUrl: './typef.component.html',
  styleUrls: ['./typef.component.css']
})
export class TypefComponent implements OnInit {
  productList : any
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.showProduct().subscribe(response =>{
      this.productList = response;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  addtocart(product: any){
    this.service.addtoCart(product)
  }
}
