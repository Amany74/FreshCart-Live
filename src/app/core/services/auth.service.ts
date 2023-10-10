import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import  jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,private __router:Router) {
    if(localStorage.getItem("userToken")){
      this.getUserData();
    }
  }

  userData:BehaviorSubject<any> = new BehaviorSubject('');
  // Get userToken
  getUserData(){
      let t = JSON.stringify(localStorage.getItem("userToken"));
      try {
        // console.log("token : " , t);
        let encoded = jwt_decode(t);
        this.userData.next(encoded);
        // console.log(this.userData);
      } catch(e) {
        console.log(e);
        return null;
      }
      return ;
    }


    registerUser(data:any):Observable<any>{
    // Call api
    return this._http.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data);

  }

  login(data:any):Observable<any>{
    // Call api
    return this._http.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data);

  }

  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this.__router.navigate(['/login']);
  }
}
