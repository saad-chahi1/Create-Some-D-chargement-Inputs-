import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDechargement1Component } from './verify-dechargement1.component';

describe('VerifyDechargement1Component', () => {
  let component: VerifyDechargement1Component;
  let fixture: ComponentFixture<VerifyDechargement1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyDechargement1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyDechargement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
