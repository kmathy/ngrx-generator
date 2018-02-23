import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  loadPeople(): Observable<any> {
    return this.http.get('https://api.com');
  }

  addPerson(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  addPeople(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  updatePerson(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  updatePeople(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  deletePerson(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

  deletePeople(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }
}
