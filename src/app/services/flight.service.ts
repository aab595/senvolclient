import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  flights: Flight[] = [
    {
      flightType: 'Aller-simple',
      startCity: 'DK',
      destination: 'Maroc',
      startDate: new Date(),
      endDate: new Date(),
      rate: 300000,
    },
    {
      flightType: 'Aller-retour',
      startCity: 'DK',
      destination: 'Maroc',
      startDate: new Date(),
      endDate: new Date(),
      rate: 250000,
    },
    {
      flightType: 'Aller-simple',
      startCity: 'DK',
      destination: 'Maroc',
      startDate: new Date(),
      endDate: new Date(),
      rate: 300000,
    },
    {
      flightType: 'Aller-retour',
      startCity: 'DK',
      destination: 'Maroc',
      startDate: new Date(),
      endDate: new Date(),
      rate: 400000,
    },
  ];

  getAllFlights(): Flight[] {
      return this.flights
  }
}
