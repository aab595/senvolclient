import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/core/models/flight.model';
import { FlightService } from 'src/app/core/services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  flights$!: Observable<Flight[]>;
  filterFlightForm!: FormGroup;

  constructor(
    private flightService: FlightService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.flights$ = this.flightService.getAllFlight();
    this.filterFlightForm = this.formBuilder.group({
      startCity: ['', Validators.required],
      endCity: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  get startCity() {
    return this.filterFlightForm.get('startCity')
  }
  
  get endCity() {
    return this.filterFlightForm.get('endCity')
  }
  get startDate() {
    return this.filterFlightForm.get('startDate')
  }
  get endDate() {
    return this.filterFlightForm.get('endDate')
  }

  onFilter(): void {
    //
  }
}
