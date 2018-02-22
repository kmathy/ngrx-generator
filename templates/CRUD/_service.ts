import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }
  
  {{#ifIn 'GET' crudMethods }}
  get{{ titleCase name }}(): Observable<any> {
    return this.http.get('https://api.com');
  }
  {{/ifIn}}

  {{#ifIn 'CREATE' crudMethods }}
  create{{ titleCase name }}(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }
  {{/ifIn}}

  {{#ifIn 'UPDATE' crudMethods }}
  update{{ titleCase name }}(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }
  {{/ifIn}}

  {{#ifIn 'DELETE' crudMethods }}
  delete{{ titleCase name }}(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }
  {{/ifIn}}
}
