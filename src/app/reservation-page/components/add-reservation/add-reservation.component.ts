import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/core/models/flight.model';
import { FlightService } from 'src/app/core/services/flight.service';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent implements OnInit {
  addReservationForm!: FormGroup;
  allFlights$!: Observable<Flight[]>;

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private toastr: ToastrService,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    this.addReservationForm = new FormGroup({
      volRef: new FormControl('', Validators.required),
      numPassenger: new FormGroup({
        adult: new FormControl(''),
        child: new FormControl(''),
        baby: new FormControl(''),
      }),
      classe: new FormControl('', Validators.required),
    });
    this.allFlights$ = this.flightService.getAllFlight();
  }

  get volRef() {
    return this.addReservationForm.get('volRef');
  }

  get classe() {
    return this.addReservationForm.get('classe');
  }

  onReservation() {
    console.log(this.addReservationForm.value);
    this.toastr.success('Réservation ajouté !');
  }
}
