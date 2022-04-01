import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Reservation, reservationType } from 'src/app/core/models/reservation.model';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-modifiy-reservation',
  templateUrl: './modifiy-reservation.component.html',
  styleUrls: ['./modifiy-reservation.component.scss'],
})
export class ModifiyReservationComponent implements OnInit {
  modifyReservationForm!: FormGroup;
  reservationId!: string;
  reservation$!: Observable<Reservation>;
  payload!: reservationType;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.modifyReservationForm = new FormGroup({
      volRef: new FormControl('', Validators.required),
      numPassenger: new FormGroup({
        adult: new FormControl(''),
        child: new FormControl(''),
        baby: new FormControl(''),
      }),
      classe: new FormControl('', Validators.required),
    });
    this.reservationId = this.route.snapshot.params['id'];
  }

  getCurrentReservation() {
    this.reservation$ = this.reservationService.getReservationById(
      this.reservationId
    );
    this.reservation$.subscribe({
      next: (result) => {
        this.payload = result.payload[0];
      },
      error: (err) => {
        this.toastr.error('Réservation inexistante !');
      },
      complete: () => {},
    });
  }

  onSubmit() {
    //
  }
}
