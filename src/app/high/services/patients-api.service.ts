import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsApiService {
  basePath: string = `${environment.serverBasePath}/patients`;
  constructor(private http: HttpClient) { }
  getPatients(): Observable<any>{
    return this.http.get(this.basePath);
  }
}
