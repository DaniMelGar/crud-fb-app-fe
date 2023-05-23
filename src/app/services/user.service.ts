import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, of, switchMap, tap, forkJoin } from 'rxjs';
import { UserModel } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private beUrl = environment.BE_URL;

  constructor(private http: HttpClient) {}

  getUserList() {
    const headers = new HttpHeaders({
      // Authorization: 'Bearer tu_token_de_autenticacion',
      'Content-type': 'application/json',
    });

    const options = { headers: headers, withCredentials: false };

    return this.http.get(`${this.beUrl}/user` /*, options*/);
  }

  getUser(id: string) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    const options = { headers: headers, withCredentials: false };

    return this.http.get(`${this.beUrl}/user/${id}` /*, options*/);
  }

  //   getcareer(dataout:any){
  //     const headers = new HttpHeaders().append('Content-Type', 'application/json').append('Authorization','Bearer'+' '+GlobalService.authtoken);
  //     console.log(headers);
  //     return this.http.post('http://localhost:3000/employee/getcareer',
  //     null,
  //     {headers }) //unncessary key-value
  //     .subscribe(data => dataout = data);
  // }

  deleteUser(id: any) {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
    });

    const options = { headers: headers, withCredentials: false };

    return this.http.delete(`${this.beUrl}/user/${id}`, options);
  }

  createUser(name: string, age: string) {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
    });

    const options = { headers: headers, withCredentials: false };

    let body = new HttpParams();

    body = body.set('name', name);
    body = body.set('age', age);

    return this.http.post(`${this.beUrl}/user`, body, options);
  }
}
