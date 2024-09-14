import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/home'], { queryParams: { username: this.username } });
  }

  navigateToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}
