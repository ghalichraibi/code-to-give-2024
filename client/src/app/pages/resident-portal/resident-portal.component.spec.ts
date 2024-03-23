import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentPortalComponent } from './resident-portal.component';

describe('ResidentPortalComponent', () => {
  let component: ResidentPortalComponent;
  let fixture: ComponentFixture<ResidentPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentPortalComponent]
    });
    fixture = TestBed.createComponent(ResidentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
