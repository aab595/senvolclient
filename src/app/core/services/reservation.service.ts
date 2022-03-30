import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getAllReservation(): Observable<Reservation[]> {
    return this.http
      .get<Reservation[]>('http://localhost:3000/api/reservations')
      .pipe(
        map((result) => {
          let finalResult: Reservation[] = [];
          result.forEach((reservation) => {
            const reservationFormated: any = {
              volRef: reservation.volRef,
              numPassenger:
                reservation.numPassenger.adult! +
                reservation.numPassenger.child! +
                reservation.numPassenger.baby!,
              classe: reservation.classe,
              createdAt: reservation.createdAt,
              updatedAt: reservation.updatedAt,
            };
            finalResult.push(reservationFormated);
          });
          return finalResult;
        })
      );
  }

  addReservation(formData: any): Observable<Reservation> {
    return this.http.post<Reservation>("http://localhost:3000/api/reservations", formData)
  }
}
