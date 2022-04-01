import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './components/reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifiyReservationComponent } from './components/modifiy-reservation/modifiy-reservation.component';
import { ReservationPageRoutingModule } from './reservation-page-routing.module';

@NgModule({
  declarations: [ReservationComponent, ModifiyReservationComponent],
  imports: [
    CommonModule,
    ReservationPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ReservationComponent, ModifiyReservationComponent],
})
export class ReservationPageModule {}
