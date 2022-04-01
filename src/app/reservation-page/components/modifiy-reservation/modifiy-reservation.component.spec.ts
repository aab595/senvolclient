import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiyReservationComponent } from './modifiy-reservation.component';

describe('ModifiyReservationComponent', () => {
  let component: ModifiyReservationComponent;
  let fixture: ComponentFixture<ModifiyReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiyReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
