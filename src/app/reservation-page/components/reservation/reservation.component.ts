import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
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
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.reservations$ = this.getAllReservation();
  }

  getAllReservation() {
    return this.reservationService.getAllReservation().pipe(
      map((response) => {
        if (response.status === 'fail') {
          return this.toastr.error(response.message);
        }
        let finalResult: {
          id: any;
          volRef: any;
          numPassenger: any;
          classe: any;
          createdAt: any;
          updatedAt: any;
        }[] = [];
        response.payload.forEach((reservation) => {
          const reservationFormated = {
            id: reservation._id,
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

  onModify(reservationId: string) {
    return this.route.navigateByUrl(`reservation/${reservationId}`);
  }

  onDelete(reservationId: string) {
    this.reservationService.deleteReservation(`reservation/${reservationId}`)
  }
}
