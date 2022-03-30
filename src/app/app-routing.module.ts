import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/components/admin-page/admin-page.component';
import { AuthComponent } from './auth-page/components/auth/auth.component';
import { ContactComponent } from './contact-page/components/contact/contact.component';
import { AuthGuard } from './core/guards/auth.gard';
import { AddReservationComponent } from './flight-page/components/add-reservation/add-reservation.component';
import { FlightListComponent } from './flight-page/components/flight-list/flight-list.component';
import { HomePageComponent } from './home-page/components/home-page/home-page.component';
import { ReservationComponent } from './reservation-page/components/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'flight', component: FlightListComponent },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },
  { path: 'flight/:id', component: AddReservationComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
