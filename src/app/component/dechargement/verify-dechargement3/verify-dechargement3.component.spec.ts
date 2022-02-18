import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDechargement3Component } from './verify-dechargement3.component';

describe('VerifyDechargement3Component', () => {
  let component: VerifyDechargement3Component;
  let fixture: ComponentFixture<VerifyDechargement3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyDechargement3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyDechargement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
