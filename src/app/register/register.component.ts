import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConfirmedValidator } from './must-match.validation';
import { UserService } from './user-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  villageList:any=[]
  districtList:any=[]
  provinceList:any=[]

  province_data:any=[];
  district_data:any=[];
  village_data:any=[];






  constructor(private fb: FormBuilder, private service: UserService, private http:HttpClient) {

  }

  registerForm = new FormGroup({});
  submitted = false;


  ngOnInit(): void {
    this.registerForm=  this.fb.group({
      first_name: [null,Validators.required],
      last_name: [null,Validators.required],
      telephone: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirm_password: [null,Validators.required],
      date_of_birth: [null,Validators.required],
      gender: [null,Validators.required],
      user_village: [null,Validators.required],
      user_district: [null,Validators.required],
      user_province: [null,Validators.required],
    },
    {
      validators: ConfirmedValidator('password','confirm_password')
    }
    );

    this.service.getProvinces().subscribe(response =>{
      console.log(response)
        this.provinceList=response.provinces
     });
  this.service.getDistrict().subscribe(response =>{
       console.log(response)
        this.districtList=response.districts
  });
     this.service.getVillage().subscribe(response =>{
         console.log(response)
            this.villageList=response.villages
      })
  }

  get f(){
    return this.registerForm.controls;
  }

  onsubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      Swal.fire({
        title: 'Please Check',
        text: 'Please write information',
        icon: 'warning',
        confirmButtonText: 'OK',
      })
    } else if(this.registerForm.valid){
      console.log(this.registerForm.value);

    }
  }

  onSelectprovince(province:any){
    let data=this.districtList.filter((res: {pr_id : string;})=>{
      return res.pr_id.toLowerCase().match(province.target.value.toLocaleLowerCase())
    })
    this.district_data=data
    this.village_data=null
    //  this.user_district=''
    //  this.user_village=''
  }
  onSelectdistrict(district:any){
    let data=this.villageList.filter((res: {dr_id : string;})=> {
      return res.dr_id.toLowerCase().match(district.target.value.toLocaleLowerCase())
    })
     this.village_data=data
    //  this.user_village=''
  }


  onReset(){
      this.submitted = false;
      this.registerForm.reset();
    }


  }




