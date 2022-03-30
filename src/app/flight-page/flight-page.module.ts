import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './components/flight/flight.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';

@NgModule({
  declarations: [FlightComponent, FlightListComponent, AddReservationComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [FlightComponent, FlightListComponent, AddReservationComponent],
})
export class FlightPageModule {}
