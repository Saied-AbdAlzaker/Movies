import { AuthService } from '../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private _AuthService:AuthService) {}

   isLoggedIn:boolean=false;

   logOut()
   {
    this._AuthService.logOut();
   }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue()){
        this.isLoggedIn=true;
      }else{
        this.isLoggedIn=false;
      }
    })
  }

}
