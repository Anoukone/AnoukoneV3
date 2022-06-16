import { CheckoutComponent } from './../checkout/checkout/checkout.component';
import { Product } from './../user.model';
import { UserService } from './../register/user-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any = []
  public totalPrice: number = 0

  constructor(private service: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(response => {
      this.products = response;
      this.totalPrice = this.service.gettotalPrice();
    })
  }

  removeCart(items: number){
    this.service.removeCart(items);
  }
  removeAllCart(){
    this.service.removeAllCard()
  }

  deliveryAdd(){
    this.dialog.open(CheckoutComponent)
  }

}
