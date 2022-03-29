import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './components/flight/flight.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FlightComponent, FlightListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FlightComponent],
})
export class FlightPageModule {}
