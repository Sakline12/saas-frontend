import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissionDetailsComponent } from './addmission-details.component';

describe('AddmissionDetailsComponent', () => {
  let component: AddmissionDetailsComponent;
  let fixture: ComponentFixture<AddmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmissionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
