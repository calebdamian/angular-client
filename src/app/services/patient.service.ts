import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  pacienteURL = environment.patientURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.pacienteURL}`);
  }

  public detail(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.pacienteURL}${id}`);
  }

  public save(Patient: Patient): Observable<any> {
    return this.httpClient.post<any>(`${this.pacienteURL}`, Patient);
  }

  public update(id: number, Patient: Patient): Observable<any> {
    return this.httpClient.put<any>(`${this.pacienteURL}${id}`, Patient);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.pacienteURL}${id}`);
  }
}
