import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloanComponent } from './viewloan.component';

describe('ViewloanComponent', () => {
  let component: ViewloanComponent;
  let fixture: ComponentFixture<ViewloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
