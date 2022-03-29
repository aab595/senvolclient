import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {
  reservationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      email: [null],
      reservationCode: [null]
    })
  }

  onSubmitForm(): void {
    console.log(this.reservationForm.value);
  }
}
