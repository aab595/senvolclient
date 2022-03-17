import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FlightPageComponent } from './components/flight-page/flight-page.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'flight', component: FlightPageComponent },
  { path: 'reservation', component: ReservationPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
