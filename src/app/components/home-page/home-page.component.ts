import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  flights!: Flight[];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.getAllFlights();
  }
}
