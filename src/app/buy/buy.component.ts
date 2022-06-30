import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../register/user-service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  getID : any
  productList: any = []
  constructor(private productservice: ProductsService, private activeroute: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.getID = this.activeroute.snapshot.paramMap.get('id');
    this.productservice.getProduct(this.getID).subscribe((res) => {
      this.productList = res
      this.productList.forEach((a:any) => {
        Object.assign(a,{qty:1,total:a.price})
      });
    })
  }

  addtoCart(product: any){
    this.service.addtoCart(product)
  }

}
