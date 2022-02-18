import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDonneesEvenementComponent } from './saisie-donnees-evenement.component';

describe('SaisieDonneesEvenementComponent', () => {
  let component: SaisieDonneesEvenementComponent;
  let fixture: ComponentFixture<SaisieDonneesEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieDonneesEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieDonneesEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
