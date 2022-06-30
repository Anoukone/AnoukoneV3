import { NgForm } from '@angular/forms';
import { UserService } from './../../register/user-service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalprice: any

  constructor(private service: UserService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(res => {
      this.totalprice = this.service.gettotalPrice()
    })
  }

  addressForm(form: NgForm){
    if(form.invalid){
      Swal.fire({
        icon: 'error',
        title: 'ກະລຸນາຕີ່ມຂໍ້ມູນ',
        text: 'ກວດສອບຄືນ',
      })
    }else if(form.valid){
      console.log(form.value)
    }
  }

}
