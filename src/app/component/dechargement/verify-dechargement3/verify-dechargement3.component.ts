import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DechargementService } from 'src/app/service/dechargement.service';

@Component({
  selector: 'app-verify-dechargement3',
  templateUrl: './verify-dechargement3.component.html',
  styleUrls: ['./verify-dechargement3.component.css']
})
export class VerifyDechargement3Component implements OnInit {

  verifyDechargement3FormGroup!: FormGroup; 
  constructor(private fb: FormBuilder, private eventService: DechargementService) { }

  ngOnInit(): void {
    this.verifyDechargement3FormGroup = this.fb.group({
      date:[''],
      shift:[''], 
      chefEscale:[''],
      operateur:[''], 
      debut:[''],
      fin:[''],
      grpEquipement:[''],
      sysFonc:[''],
      equipement:[''],
      metier:[''],
      cause:[''],
      observation:[''],
      categorieArret:['']
    });
  }
  VerifyDechargement(){
    this.eventService.AddFinShift(this.verifyDechargement3FormGroup.value).subscribe(
      data=>{
        alert('Succeded added')
      }
    );
  }

}
