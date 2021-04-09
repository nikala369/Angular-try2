import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { mainUrl } from 'src/environments/environment';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public https: HttpClient) {}

  // Auth
  login(userInfo: string) {
    return this.https
      .post<User>(`${mainUrl}/login`, userInfo)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  // For Guard <true or false>
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // For interceptor
  getToken() {
    return localStorage.getItem('token');
  }
}
