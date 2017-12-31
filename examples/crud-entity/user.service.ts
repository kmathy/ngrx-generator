import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers(): Observable<any> {
    return this.http.get('https://api.com');
  }

  addUser(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  addUsers(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  updateUser(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  updateUsers(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  deleteUser(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

  deleteUsers(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

  clearUsers(param: any): Observable<any> {
    return;
  }

}
