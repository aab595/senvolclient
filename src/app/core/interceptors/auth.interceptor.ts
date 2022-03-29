import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.getToken()) {
      const cloned = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${this.auth.getToken()}`
        ),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
