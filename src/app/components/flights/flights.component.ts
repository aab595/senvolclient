import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  flights!: Flight[];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.getAllFlights();
  }
}
