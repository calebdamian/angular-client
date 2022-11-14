import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClHist } from '../models/cl-hist';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class ClHistService {
  clhistURL = environment.clhistURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<ClHist[]> {
    return this.httpClient.get<ClHist[]>(`${this.clhistURL}`);
  }

  public detail(id: number): Observable<ClHist> {
    return this.httpClient.get<ClHist>(`${this.clhistURL}${id}`);
  }

  public save(clhist: ClHist): Observable<any> {
    return this.httpClient.post<any>(`${this.clhistURL}`, clhist);
  }

  public update(id: number, clhist: ClHist): Observable<any> {
    return this.httpClient.patch<any>(`${this.clhistURL}${id}`, clhist);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.clhistURL}${id}`);
  }
}
