import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth-page/components/auth/auth.component';
import { ContactComponent } from './contact-page/components/contact/contact.component';
import { FlightComponent } from './flight-page/components/flight/flight.component';
import { HomePageComponent } from './home-page/components/home-page/home-page.component';
import { ReservationComponent } from './reservation-page/components/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
