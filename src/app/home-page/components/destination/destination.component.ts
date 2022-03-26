import { Component, Input, OnInit } from '@angular/core';
import { Destination } from 'src/app/core/models/destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  @Input() destination!: Destination;

  constructor() {}

  ngOnInit(): void {}
}
