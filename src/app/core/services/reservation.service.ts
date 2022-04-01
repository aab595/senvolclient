import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private _baseUrl = 'https://senvolapi.herokuapp.com/api/reservations';
  private user_id = this.auth.getCurrentUser().id

  constructor(private http: HttpClient, private auth: AuthService) {}

  getAllReservation(): Observable<Reservation> {
    return this.http.get<Reservation>(this._baseUrl);
  }

  addReservation(formData: any): Observable<Reservation> {
    return this.http.post<Reservation>(this._baseUrl, {
      userRef: this.user_id,
      ...formData,
    });
  }

  modifyReservation(formData: any): Observable<Reservation> {
    return this.http.put<Reservation>(this._baseUrl, {
      userRef: this.user_id,
      ...formData,
    });
  }
}
