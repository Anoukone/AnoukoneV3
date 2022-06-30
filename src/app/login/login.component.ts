import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../register/user-service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted =false

  constructor(private service: UserService,public router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    if(form.invalid){
      Swal.fire({
        icon: 'error',
        title: 'ລະຫັດຜ່ານ ຫຼື ເມລບໍ່ຖືກຕ້ອງ',
        text: 'ກະລຸນາກວດສອບຄືນ',
      })
    }else if(form.valid){
      this.spinner.show()
      this.service.login(form.value.email, form.value.password)
      this.router.navigate(['main'])
    }
    setTimeout(() => {
      this.spinner.hide()
    }, 1000)

  }
}

