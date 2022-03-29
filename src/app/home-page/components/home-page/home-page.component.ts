import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from 'src/app/core/models/destination.model';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  destinations$!: Observable<Destination[]>;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinations$ = this.destinationService.getAllDestination();
  }
}
