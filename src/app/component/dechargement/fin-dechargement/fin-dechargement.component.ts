import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DechargementService } from 'src/app/service/dechargement.service';

@Component({
  selector: 'app-fin-dechargement',
  templateUrl: './fin-dechargement.component.html',
  styleUrls: ['./fin-dechargement.component.css']
})
export class FinDechargementComponent implements OnInit {

  finDechargementFormGroup!: FormGroup;
  constructor(private fb:FormBuilder, private dechargementService: DechargementService) { }

  ngOnInit(): void {
    this.finDechargementFormGroup = this.fb.group({
      finDechargement:[''],
      finBuild:[''],
      appareillage:['']
    });
  }
  AddFinDechargement(){
    this.dechargementService.FinDechargement(this.finDechargementFormGroup.value).subscribe(
      data=>{
        alert('Succeded added')
      }
    );
  }

}
