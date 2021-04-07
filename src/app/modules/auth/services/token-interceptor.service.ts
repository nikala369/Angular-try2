import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: any, next: any) {
    let authService = this.injector.get(AuthService);
    let retokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
    return next.handle(retokenReq);
  }
}
