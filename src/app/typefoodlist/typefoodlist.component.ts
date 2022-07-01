import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { UserService } from '../register/user-service';

@Component({
  selector: 'app-typefoodlist',
  templateUrl: './typefoodlist.component.html',
  styleUrls: ['./typefoodlist.component.css']
})
export class TypefoodlistComponent implements OnInit {
  getfoodlist: any
  foodlist: any = []
  constructor(private activeroute: ActivatedRoute, private productservice: ProductsService, private service: UserService ) { }

  ngOnInit(): void {
    this.getfoodlist = this.activeroute.snapshot.paramMap.get('id')
    this.productservice.itemProducts(this.getfoodlist).subscribe((res) => {
      this.foodlist = res
    })
  }
  addtocart(product:any){
    this.service.addtoCart(product)
  }

}
