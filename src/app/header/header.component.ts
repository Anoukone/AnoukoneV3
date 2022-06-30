import { ProductsService } from './../products/products.service';
import { Router } from '@angular/router';
import { UserService } from './../register/user-service';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLogin = false;
  private authListenerSubs: any
  public totalItem: any = []
  productCategories: any = []


  @Output() productTypes: any = []
  constructor(private userService: UserService, private spinner: NgxSpinnerService, private route: Router, private productService: ProductsService ) { }

  ngOnInit(): void {
    this.authListenerSubs =this.userService.getAuthStatusListenser().subscribe(userAuthenticated =>
      {
        this.userLogin = userAuthenticated;
      })
     this.userService.getProduct().subscribe(res => {
     this.totalItem = res.length;
     })

     this.productService.getproductCategory().subscribe(res =>{
      this.productCategories = res
     })
     this.productService.getproductTypes().subscribe(res =>{
      this.productTypes = res
     })




  }


  onLogout(){
    this.spinner.show();
    this.userService.logout();
    setTimeout(() =>{
      this.spinner.hide();
    },2000)
    this.route.navigate(['login'])
  }



  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe()
  }

onselectCategories(categories: any){
  let data = this.productTypes.filter((res: {category: string}) =>{
    return res.category.toLowerCase().match(categories.target.value.toLocaleLowerCase())
  })
  this.productTypes = data
  this.route.navigate(['categories'])
}

}
