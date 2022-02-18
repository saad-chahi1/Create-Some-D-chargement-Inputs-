import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinDechargementComponent } from './component/dechargement/fin-dechargement/fin-dechargement.component';
import { FinShiftComponent } from './component/dechargement/fin-shift/fin-shift.component';
import { SaisieDonneesEvenementComponent } from './component/dechargement/saisie-donnees-evenement/saisie-donnees-evenement.component';
import { VerifyDechargement1Component } from './component/dechargement/verify-dechargement1/verify-dechargement1.component';
import { VerifyDechargement3Component } from './component/dechargement/verify-dechargement3/verify-dechargement3.component';

const routes: Routes = [
  { path: 'evenement', component: SaisieDonneesEvenementComponent },
  { path: 'finShift', component: FinShiftComponent },
  { path: 'finDechargement', component: FinDechargementComponent },
  { path: 'verifyDechargement1', component: VerifyDechargement1Component },
  { path: 'verifyDechargement3', component: VerifyDechargement3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
