import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}

  getAllFlight(): Observable<Flight[]> {
    return this.http.get<Flight[]>('https://senvolapi.herokuapp.com/api/flights');
  }
}
