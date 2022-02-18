import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DechargementService } from 'src/app/service/dechargement.service';

@Component({
  selector: 'app-fin-shift',
  templateUrl: './fin-shift.component.html',
  styleUrls: ['./fin-shift.component.css']
})
export class FinShiftComponent implements OnInit {

  finShiftFormGroup!: FormGroup; 
  constructor(private fb: FormBuilder, private eventService: DechargementService) { }

  ngOnInit(): void {
    this.finShiftFormGroup = this.fb.group({
      shift:[''],
      date:[''], 
      chefEscale:[''],
      validation:[false]
    });
  }
  AddFinSchift(){
    this.eventService.AddFinShift(this.finShiftFormGroup.value).subscribe(
      data=>{
        alert('Succeded added')
      }
    );
  }

}
