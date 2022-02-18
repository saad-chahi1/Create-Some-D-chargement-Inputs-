import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinShiftComponent } from './fin-shift.component';

describe('FinShiftComponent', () => {
  let component: FinShiftComponent;
  let fixture: ComponentFixture<FinShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
