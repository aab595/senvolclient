import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { Reservation } from 'src/app/core/models/reservation.model';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  reservations$!: Observable<any>;

  constructor(
    private reservationService: ReservationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.reservations$ = this.reservationService.getAllReservation().pipe(
      map((response) => {
        if (response.status === 'fail') {
          return this.toastr.error(response.message);
        }
        let finalResult: {
          volRef: any;
          numPassenger: any;
          classe: any;
          createdAt: any;
          updatedAt: any;
        }[] = [];
        response.payload.forEach((reservation) => {
          const reservationFormated = {
            volRef: reservation.volRef,
            numPassenger:
              reservation.numPassenger.adult! +
              reservation.numPassenger.child! +
              reservation.numPassenger.baby!,
            classe: reservation.classe,
            createdAt: reservation.createdAt,
            updatedAt: reservation.updatedAt,
          };
          finalResult.push(reservationFormated);
        });
        return finalResult;
      })
    );
  }
}
