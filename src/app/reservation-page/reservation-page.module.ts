import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifiyReservationComponent } from './components/modifiy-reservation/modifiy-reservation.component';
import { ReservationPageRoutingModule } from './reservation-page-routing.module';

@NgModule({
  declarations: [ReservationComponent, ModifiyReservationComponent],
  imports: [CommonModule, ReservationPageRoutingModule, ReactiveFormsModule],
  exports: [ReservationComponent, ModifiyReservationComponent],
})
export class ReservationPageModule {}
