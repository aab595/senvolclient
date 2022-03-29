import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './components/flight/flight.component';

@NgModule({
  declarations: [FlightComponent],
  imports: [CommonModule],
  exports: [FlightComponent],
})
export class FlightPageModule {}
