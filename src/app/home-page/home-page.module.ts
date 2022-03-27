import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DestinationComponent } from './components/destination/destination.component';

@NgModule({
  declarations: [HomePageComponent, DestinationComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, DestinationComponent],
})
export class HomePageModule {}
