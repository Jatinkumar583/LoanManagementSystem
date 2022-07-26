import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewloanComponent } from './addnewloan.component';

describe('AddnewloanComponent', () => {
  let component: AddnewloanComponent;
  let fixture: ComponentFixture<AddnewloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
