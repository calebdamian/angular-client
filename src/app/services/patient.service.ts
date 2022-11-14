import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  pacienteURL = environment.patientURL;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Patient[]> {
    return this.httpClient
      .get<Patient[]>(`${this.pacienteURL}/ver/todos`, this.httpOptions)
      .pipe(map((results: any) => results.patients));
  }

  public detail(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.pacienteURL}/ver/id/${id}`);
  }

  public save(Patient: Patient): Observable<any> {
    return this.httpClient.post<any>(`${this.pacienteURL}/crear/1`, Patient);
  }

  public update(id: number, Patient: Patient): Observable<any> {
    return this.httpClient.put<any>(
      `${this.pacienteURL}/editar/${id}`,
      Patient
    );
  }

  public delete(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(`${this.pacienteURL}/eliminar/${id}`);
  }
}
