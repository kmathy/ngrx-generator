import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicService {

  constructor(private http: HttpClient) { }

  loadBasic(): Observable<any> {
    return this.http.get('https://api.com');
  }
}
