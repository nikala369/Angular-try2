import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public controlLogin!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.controlLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (!this.controlLogin.valid) {
      this.router.navigate(['/']);
    } else {
      this.authService.login(this.controlLogin.value).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/institution']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
