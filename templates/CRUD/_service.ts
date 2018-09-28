import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }
  
  {{#ifIn 'GET' crudMethods }}
  get{{ properCase name }}(): Observable<any> {
    return this.http.get('https://api.com');
  }
  {{/ifIn}}

  {{#ifIn 'CREATE' crudMethods }}
  create{{ properCase name }}(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }
  {{/ifIn}}

  {{#ifIn 'UPDATE' crudMethods }}
  update{{ properCase name }}(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }
  {{/ifIn}}

  {{#ifIn 'DELETE' crudMethods }}
  delete{{ properCase name }}(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }
  {{/ifIn}}
}
