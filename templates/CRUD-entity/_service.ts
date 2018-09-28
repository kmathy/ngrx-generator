import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }

  {{#ifIn 'GET' entityMethods }}
  load{{ properCase plural }}(): Observable<any> {
    return this.http.get('https://api.com');
  }

  {{/ifIn}}
  {{#ifIn 'CREATE' entityMethods }}
  add{{ properCase name }}(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'CREATE_MANY' entityMethods }}
  add{{ properCase plural }}(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'UPDATE' entityMethods }}
  update{{ properCase name }}(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'UPDATE_MANY' entityMethods }}
  update{{ properCase plural }}(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'DELETE' entityMethods }}
  delete{{ properCase name }}(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

  {{/ifIn}}
  {{#ifIn 'DELETE_MANY' entityMethods }}
  delete{{ properCase plural }}(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }
  {{/ifIn}}
}
