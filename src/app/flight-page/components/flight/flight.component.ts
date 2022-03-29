import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Flight } from 'src/app/core/models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  @Input() flight!: Flight;

  constructor() { }

  ngOnInit(): void {
  }

  timeDifference(startTime: any, endTime: any) {
    const start = moment(startTime, "HH:mm:ss")
    const end = moment(endTime, "HH:mm:ss")
    return moment(end).diff(moment(start), "hour")
  }

}
