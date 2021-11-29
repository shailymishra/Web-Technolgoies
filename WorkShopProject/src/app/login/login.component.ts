import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import * as constant from '../shared/config';
import { SharedService } from '../shared/shared.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: FormGroup;
  public submitted: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sendSliderMenuFlag(false);
    if (this.authService.isLoggedIn) {
      this.router.navigate([constant.DASHBOARD_URL]);
    }

    this.userLogin = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login() {
    this.submitted = true;
    const userName = this.userLogin.value.userName;
    const password = this.userLogin.value.password;
    if (this.userLogin.valid) {
      this.authService.login(userName, password).subscribe(() => {
        this.submitted = false;
        this.sharedService.sendSliderMenuFlag(true);

      });
    }
  }

  logout() {
    this.authService.logout();
  }

}
