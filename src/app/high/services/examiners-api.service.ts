import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExaminersApiService {
  basePath: string = `${environment.serverBasePath}/examiners`;
  constructor(private http: HttpClient) { }
  getExaminers(): Observable<any>{
    return this.http.get(this.basePath);
  }
}
