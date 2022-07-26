import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchloanComponent } from './searchloan.component';

describe('SearchloanComponent', () => {
  let component: SearchloanComponent;
  let fixture: ComponentFixture<SearchloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
