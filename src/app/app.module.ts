import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageModule } from './home-page/home-page.module';
import { FlightPageModule } from './flight-page/flight-page.module';
import { ReservationPageModule } from './reservation-page/reservation-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';
import { AuthPageModule } from './auth-page/auth-page.module';
import { AdminPageModule } from './admin-page/admin-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomePageModule,
    FlightPageModule,
    ReservationPageModule,
    ContactPageModule,
    AuthPageModule,
    AdminPageModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
