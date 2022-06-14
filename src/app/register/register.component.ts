import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConfirmedValidator } from './must-match.validation';
import { UserService } from './user-service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';


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
  registerForm: any = FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: UserService, private http:HttpClient ,private spinner: NgxSpinnerService,private route: Router ) {

  }

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
      // console.log(response)
        this.provinceList=response.provinces
     });
  this.service.getDistrict().subscribe(response =>{
      //  console.log(response)
        this.districtList=response.districts
  });
     this.service.getVillage().subscribe(response =>{
        //  console.log(response)
            this.villageList=response.villages
      })
  }

  get f(){return this.registerForm.controls;}

  onSignup(form: NgForm){
    if(form.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Form is Invalid',
        text: 'Please input all Fill',
      })
    }else if(form.valid){
      this.spinner.show()
      this.service.register( form.value.name, form.value.surname, form.value.email, form.value.password,
        form.value.dob, form.value.phone, form.value.gender,form.value.province, form.value.district,
        form.value.village );
      this.route.navigate(['login'])
      Swal.fire({
        icon:'success',
        title:'ຍິນດີຕອນຮັບ',
        text:'ລົງທະບຽນສຳເລັດ'
      });


    }
    setTimeout(() =>{
      this.spinner.hide();
    },2000)
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




