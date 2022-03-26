import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  destinations: Destination[] = [
    {
      id: 1,
      title: 'Maroc',
      cover: 'cover 1',
      description: 'desc 1',
    },
    {
      id: 2,
      title: 'Paris',
      cover: 'cover 1',
      description: 'desc 1',
    },
    {
      id: 3,
      title: 'Dakar',
      cover: 'cover 1',
      description: 'desc 1',
    },
  ];

  getAllDestination(): Destination[] {
    return this.destinations;
  }
}
