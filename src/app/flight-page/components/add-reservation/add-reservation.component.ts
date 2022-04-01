import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/core/models/flight.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent implements OnInit {
  addReservationForm!: FormGroup;
  allFlights$!: Observable<Flight[]>;
  flightId!: string;

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
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
    this.flightId = this.route.snapshot.params['id'];
  }

  get volRef() {
    return this.addReservationForm.get('volRef');
  }

  get classe() {
    return this.addReservationForm.get('classe');
  }

  onReservation() {
    const data = this.addReservationForm.value;
    this.reservationService.addReservation(data).subscribe(() => {
      this.toastr.success('Réservation ajouté !');
      this.router.navigateByUrl('/reservation');
    });
  }
}
