
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../user.model";
import { UserLogin } from "../user.model";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private token: any
  private authStatusListener = new Subject<boolean>()
  private isAuthenticated = false
  public cartitemList : any = []
  public productList = new BehaviorSubject<any>([])

  constructor (private http: HttpClient){

  }

getProvinces(){
  let url="https://laos-areas-api.herokuapp.com/laos/provinces"
  return this.http.get<any>(url);
}

 getDistrict(){
   let url="https://laos-areas-api.herokuapp.com/laos/districts"
  return this.http.get<any>(url);
 }

getVillage(){
    let url="https://laos-areas-api.herokuapp.com/laos/villages"
  return this.http.get<any>(url);
  }

  register(name: any,surname: any,email: any,password: any, dob: any,phone: any,gender: any, province: any,district: any,village: any ){
    const userModel: UserModel = {name: name, surname: surname, email: email, password: password, dob: dob, phone: phone, gender: gender, province: province, district: district, village: village};
    this.http.post("http://localhost:8001/customer/register", userModel)
    .subscribe(response => {
      console.log(response)
    })
  }

  getToken(){
    return this.token;
  }

  getAuth(){
    return this.isAuthenticated;
  }

  getAuthStatusListenser(){
    return this.authStatusListener.asObservable();
  }

  login(email: any,password: any,){
    const userLogin: UserLogin = {email: email, password: password};
    this.http.post<{token: string}>("http://localhost:8001/customer/login", userLogin)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token){
        this.isAuthenticated = true,
        this.authStatusListener.next(true)
      }
    })
  }
    logout(){
    this.token = null,
    this.isAuthenticated = false
    this.authStatusListener.next(false)
  }

  showProduct(){
    let url="http://localhost:8001/api/products"
    return this.http.get<any>(url);
  }

  getProduct(){
    return this.productList.asObservable();
  }

  itemCount(){
    return this.cartitemList.lenght
  }

  setProduct(product: any){
    this.cartitemList.push(...product)
    this.productList.next(product)

  }
  addtoCart(product: any){
    this.cartitemList.push(product)
    this.productList.next(this.cartitemList)
    this.gettotalPrice()
    console.log(product)

  }
  gettotalPrice(): number{
    let totalPrice = 0
    this.cartitemList.map((a:any) => {
      totalPrice += a.total;
    })
    return totalPrice
  }
  removeCart(product: any){
    this.cartitemList.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cartitemList.splice(index,1)
      }
    })
    this.productList.next(this.cartitemList)
  }
  removeAllCard(){
    this.cartitemList = []
    this.productList.next(this.cartitemList)
  }
}


