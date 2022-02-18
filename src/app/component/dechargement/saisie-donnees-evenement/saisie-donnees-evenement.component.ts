import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DechargementService } from 'src/app/service/dechargement.service';

@Component({
  selector: 'app-saisie-donnees-evenement',
  templateUrl: './saisie-donnees-evenement.component.html',
  styleUrls: ['./saisie-donnees-evenement.component.css']
})
export class SaisieDonneesEvenementComponent implements OnInit {

  evenementFormGroup!: FormGroup; 
  constructor(private fb: FormBuilder, private eventService: DechargementService) { }

  ngOnInit(): void {
    this.evenementFormGroup = this.fb.group({
      shift:[''],
      operateur:[''], 
      evenement:[''],
      dateDebut:[''],
      heureDebut:[''],
      dateFin:[''],
      heureFin:[''],
      observation:['']
    });
  }
  AddNewEvent(){
    this.eventService.AddNewEvent(this.evenementFormGroup.value).subscribe(
      data=>{
        alert('Succeded added')
      }
    );
  }

}
