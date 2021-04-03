import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public controlLogin!: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.controlLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    if (!this.controlLogin.valid) {
      this.router.navigate(['/']);
    } else {
      console.log(this.controlLogin.value);
    }
    // } else {
    //   this.authService.login(this.controlLogin.value).subscribe(
    //     (res) => {
    //       console.log(res);
    //       localStorage.setItem('token', res.token);
    //       this.router.navigate(['/institution']);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
  }
}
