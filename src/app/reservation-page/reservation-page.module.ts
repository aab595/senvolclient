import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './components/reservation/reservation.component';

@NgModule({
  declarations: [ReservationComponent],
  imports: [CommonModule],
  exports: [ReservationComponent],
})
export class ReservationPageModule {}
