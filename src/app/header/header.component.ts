import { Router } from '@angular/router';
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
  public totalItem: any = 0


  constructor(private userService: UserService, private spinner: NgxSpinnerService, private route: Router) { }

  ngOnInit(): void {
    this.authListenerSubs =this.userService.getAuthStatusListenser().subscribe(userAuthenticated =>
      {
        this.userLogin = userAuthenticated;
      })
    this.userService.getProduct().subscribe(response => {
      this.totalItem = response.lenght;
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



}
