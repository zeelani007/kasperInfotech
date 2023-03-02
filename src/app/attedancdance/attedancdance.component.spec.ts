import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttedancdanceComponent } from './attedancdance.component';

describe('AttedancdanceComponent', () => {
  let component: AttedancdanceComponent;
  let fixture: ComponentFixture<AttedancdanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttedancdanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttedancdanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
