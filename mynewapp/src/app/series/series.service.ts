import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from './Series';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUrl);
  }

}
