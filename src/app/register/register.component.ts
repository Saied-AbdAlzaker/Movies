import { AuthService } from './../auth.service';
import { Component , OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private _AuthService:AuthService,private _Router:Router,private toastr: ToastrService) {}

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(null,[Validators.required,Validators.min(18),Validators.max(60)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
  })

  submitForm(){
    if(this.registerForm.invalid){ // Not Change Disabled From User
      return;
    }

    console.log(this.registerForm.value);

    this._AuthService.register(this.registerForm.value).subscribe((data)=>{
      console.log(data);
      
      if(data.message == 'success')
      {
        this.toastr.success('Logged In Success' , 'login page')
        this._Router.navigateByUrl('/login');
      } else{
        this.toastr.error(data.message , 'Error Message');
        alert(data.message);
      }
    })
    
  }

  ngOnInit(): void {
    
  }

}
