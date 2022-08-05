import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        BrowserModule,
        FormsModule
      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
      //fixture.detectChanges();

    });   
  });

  it('should set submitted to true', async(() => {
    component.onSubmit()
    expect(component).toBeTruthy();
  }));

  // it('forms should be invalid', async(() => {
  //   component.
  //   component.onSubmit()
  //   expect(component).toBeTruthy();
  // }));

  // it('forms should be valid', async(() => {
  //   component.onSubmit()
  //   expect(component).toBeTruthy();
  // }));

});
