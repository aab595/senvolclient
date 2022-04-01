import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifiyReservationComponent } from './components/modifiy-reservation/modifiy-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  { path: ':id', component: ModifiyReservationComponent },
  { path: '', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationPageRoutingModule {}
