
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserService {


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

}


