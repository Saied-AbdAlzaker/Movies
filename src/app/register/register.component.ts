import { AuthService } from '../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(60)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
  })

  submitForm() {
    this.isLoading = true;

    if (this.registerForm.invalid) { // Not Change Disabled From User
      return;
    }

    this._AuthService.register(this.registerForm.value).subscribe({
      next: (res) => {

        if (res.message == 'success') {
          this.errorMessage = '';
          // this.toastr.success('Logged In Success', 'login page')
          this._Router.navigateByUrl('/login');
          this.isLoading = false;
        } else {
          this.errorMessage = res.message;
          this.isLoading = false;
        }
      }, error: (err) => {
        this.isLoading = false;

      }, complete: () => {
        this.isLoading = false;

      }
    })

  }

}
