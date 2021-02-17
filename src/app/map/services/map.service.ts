import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private dataMap = 'assets/data/data-map.json';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(this.dataMap);
  }
}
