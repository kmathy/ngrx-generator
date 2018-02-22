import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }

  {{#ifIn 'GET' entityMethods }}
  load{{ titleCase plural }}(): Observable<any> {
    return this.http.get('https://api.com');
  }

  {{/ifIn}}
  {{#ifIn 'CREATE' entityMethods }}
  add{{ titleCase name }}(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'CREATE_MANY' entityMethods }}
  add{{ titleCase plural }}(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'UPDATE' entityMethods }}
  update{{ titleCase name }}(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'UPDATE_MANY' entityMethods }}
  update{{ titleCase plural }}(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'DELETE' entityMethods }}
  delete{{ titleCase name }}(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

  {{/ifIn}}
  {{#ifIn 'DELETE_MANY' entityMethods }}
  delete{{ titleCase plural }}(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }
  {{/ifIn}}
}
