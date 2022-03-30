import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ReservationComponent],
})
export class ReservationPageModule {}
