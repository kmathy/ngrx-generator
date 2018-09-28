import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { }
  
  getCrud(): Observable<any> {
    return this.http.get('https://api.com');
  }

  createCrud(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  updateCrud(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  deleteCrud(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }
}
