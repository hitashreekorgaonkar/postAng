import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  mobile: string;
  password: string;

  constructor(
    private authenticationService: AuthService,
    public authService: AuthGuardService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  private buildLoginForm(): void {
    this.loginForm = new FormGroup({
      mobile: new FormControl('1111111111', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('22222222', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    });
  }

  validateUserCredentials() {
    this.mobile = this.loginForm.value.mobile;
    this.password = this.loginForm.value.password;

    console.log("Login page: " + this.mobile);
    console.log("Login page: " + this.password);

    this.authenticationService.login(this.mobile, this.password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);
        if (data) this.router.navigate(['/post']);
      });
  }


}
