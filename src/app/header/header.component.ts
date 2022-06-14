import { UserService } from './../register/user-service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLogin = false;
  private authListenerSubs: any
   totalItem: any


  constructor(private userService: UserService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.authListenerSubs =this.userService.getAuthStatusListenser().subscribe(userAuthenticated =>
      {
        this.userLogin = userAuthenticated;
      })
    this.userService.getProduct().subscribe(res => {
      this.totalItem = res.lenght;
    })

  }

  onLogout(){
    this.spinner.show();
    this.userService.logout();
    setTimeout(() =>{
      this.spinner.hide();
    },2000)
  }



  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe()
  }



}
