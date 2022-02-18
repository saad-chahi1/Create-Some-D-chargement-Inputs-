import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DechargementService } from 'src/app/service/dechargement.service';

@Component({
  selector: 'app-verify-dechargement1',
  templateUrl: './verify-dechargement1.component.html',
  styleUrls: ['./verify-dechargement1.component.css']
})
export class VerifyDechargement1Component implements OnInit {

  verifyDechargement1FormGroup!: FormGroup; 
  constructor(private fb: FormBuilder, private eventService: DechargementService) { }

  ngOnInit(): void {
    this.verifyDechargement1FormGroup = this.fb.group({
      eta:[''],
      fourchette:[''], 
      contrat:['']
    });
  }
  VerifyDechargement(){
    this.eventService.AddFinShift(this.verifyDechargement1FormGroup.value).subscribe(
      data=>{
        alert('Succeded added')
      }
    );
  }

}
