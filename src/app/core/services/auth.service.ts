import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/auth/register';
  private _loginUrl = 'http://localhost:3000/api/auth/login';

  constructor(private http: HttpClient) {}

  register(fullname: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(this._registerUrl, {
      fullname, email, password
    }).pipe(map(response => {
      return response
    }))
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this._loginUrl, { email, password }).pipe(
      map((response) => {
        const expireAt = moment().add(response.expiresIn, 'hour');
        localStorage.setItem('id_token', response.token!);
        localStorage.setItem('expires_at', JSON.stringify(expireAt));
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }
}
