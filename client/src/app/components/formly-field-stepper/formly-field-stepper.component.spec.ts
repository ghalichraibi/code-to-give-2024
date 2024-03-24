import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldStepperComponent } from './formly-field-stepper.component';

describe('FormlyFieldStepperComponent', () => {
  let component: FormlyFieldStepperComponent;
  let fixture: ComponentFixture<FormlyFieldStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyFieldStepperComponent]
    });
    fixture = TestBed.createComponent(FormlyFieldStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
