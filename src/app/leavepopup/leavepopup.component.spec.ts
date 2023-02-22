import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavepopupComponent } from './leavepopup.component';

describe('LeavepopupComponent', () => {
  let component: LeavepopupComponent;
  let fixture: ComponentFixture<LeavepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavepopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
