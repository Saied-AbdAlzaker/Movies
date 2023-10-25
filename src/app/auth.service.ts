import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';
import { Register } from './register';
import { Login } from './login';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private _Router:Router)
   {
    if(localStorage.getItem('userToken')){
      this.saveUserData();
    }
   }
   
   userData = new BehaviorSubject(null);

  saveUserData(){
    let enCodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(enCodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);
  }

  logOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigateByUrl('/login');
  }

  register(registerData:Register):Observable<any>
  {
    return this.http.post('https://movies-api.routemisr.com/signup',registerData)
  }

  login(loginData:Login):Observable<any>
  {
    return this.http.post('https://movies-api.routemisr.com/signin',loginData)
  }
}
