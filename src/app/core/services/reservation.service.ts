import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(
      'http://localhost:3000/api/reservations'
    );
  }
}
