import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificantPersonFormComponent } from './significant-person-form.component';

describe('SignificantPersonFormComponent', () => {
  let component: SignificantPersonFormComponent;
  let fixture: ComponentFixture<SignificantPersonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignificantPersonFormComponent]
    });
    fixture = TestBed.createComponent(SignificantPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
