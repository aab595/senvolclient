import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination.model';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {
  destinations!: Destination[];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinations = this.destinationService.getAllDestinations();
  }
}
