import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DechargementService {

  constructor(private http:HttpClient) { }

  AddNewEvent(newEvent: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/events', newEvent);
  }
  AddFinShift(finShift: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/finShifts', finShift);
  }
  FinDechargement(finDechargement: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/finShifts', finDechargement);
  }
}
