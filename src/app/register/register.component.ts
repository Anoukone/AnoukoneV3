import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {






  constructor(private fb: FormBuilder) {

  }

  registerForm = new FormGroup({});
  submitted = false;


  ngOnInit(): void {
    this.registerForm=  this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirm_password: ['',Validators.required],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      telephone: ['',Validators.required],
      date_of_birth: ['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      gender: ['',Validators.required],
      village: ['',Validators.required],
      district: ['',Validators.required],
      province: ['',Validators.required],
    });
  }

  get f(){
    return this.registerForm.controls;
  }

  Onsubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    // console.log(this.registerForm.value)
  }

  onReset(){
      this.submitted = false;
      this.registerForm.reset();
    }


  }




