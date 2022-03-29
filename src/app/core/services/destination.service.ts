import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  getAllDestination(): Observable<Destination[]> {
    return this.http.get<Destination[]>(
      'http://localhost:3000/api/destinations'
    );
  }
}
