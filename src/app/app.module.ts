import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { SaisieDonneesEvenementComponent } from './component/dechargement/saisie-donnees-evenement/saisie-donnees-evenement.component';
import { FinShiftComponent } from './component/dechargement/fin-shift/fin-shift.component';
import { FinDechargementComponent } from './component/dechargement/fin-dechargement/fin-dechargement.component';
import { VerifyDechargement1Component } from './component/dechargement/verify-dechargement1/verify-dechargement1.component';
import { VerifyDechargement3Component } from './component/dechargement/verify-dechargement3/verify-dechargement3.component';

@NgModule({

  declarations: [
    AppComponent,
    SaisieDonneesEvenementComponent,
    FinShiftComponent,
    FinDechargementComponent,
    VerifyDechargement1Component,
    VerifyDechargement3Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
