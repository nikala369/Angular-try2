import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mainUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public https: HttpClient) {}

  // Auth
  login(userInfo: string) {
    return this.https.post<string>(`${mainUrl}/login`, userInfo);
  }

  // For Guard <true or false>
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
