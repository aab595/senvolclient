import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Flight } from 'src/app/core/models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  @Input() flight!: Flight;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const flightId: string = this.route.snapshot.params['id']
  }

  timeDifference(startTime: any, endTime: any) {
    const start = moment(startTime, "HH:mm:ss")
    const end = moment(endTime, "HH:mm:ss")
    return moment(end).diff(moment(start), "hour")
  }

  onFlight(flightId: string) {
    console.log(flightId)
    this.router.navigateByUrl(`/flight/${flightId}`)
  }

}
