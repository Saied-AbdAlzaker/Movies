import { AuthService } from '../Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router, private toastr: ToastrService) { }

  ngOnInit(): void { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')])
  })

  submitForm() {
    this.isLoading = true;

    if (this.loginForm.invalid) {
      return;
    }

    this._AuthService.login(this.loginForm.value).subscribe({
      next: (res) => {

        if (res.message == 'success') {
          localStorage.setItem('userToken', res.token);
          this._AuthService.saveUserData();

          this._Router.navigate(['home']);
          this.isLoading = false;

          // this.toastr.success('Logged In Success', 'login page')
        } else {
          // this.toastr.error(res.message, 'Error Message');
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
