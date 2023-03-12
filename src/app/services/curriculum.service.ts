import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http: HttpClient) { }

  getCurriculumData(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/payload', {
      observe: 'response',
      responseType: 'json',
    })
  }
}
