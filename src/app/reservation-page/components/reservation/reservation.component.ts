import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/core/models/reservation.model';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservations$!: Observable<Reservation[]>

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservations$ = this.reservationService.getAllReservation()
  }

}
