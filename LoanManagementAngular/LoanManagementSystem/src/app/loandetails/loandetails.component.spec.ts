import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandetailsComponent } from './loandetails.component';

describe('LoandetailsComponent', () => {
  let component: LoandetailsComponent;
  let fixture: ComponentFixture<LoandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
