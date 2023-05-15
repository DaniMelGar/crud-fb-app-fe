import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of, switchMap, tap, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private beUrl = environment.BE_URL;

  constructor(private http: HttpClient) {}

  getUserList() {
    console.log('getUserList');

    // Agregar cabeceras de autenticación
    const headers = new HttpHeaders({
      // Authorization: 'Bearer tu_token_de_autenticacion',
      'content-type': 'application/json',
    });

    // Agregar opciones de solicitud (request options)
    const options = { headers: headers, withCredentials: true };

    return this.http.get(`${this.beUrl}/user`, options);
  }

  //   getcareer(dataout:any){
  //     const headers = new HttpHeaders().append('Content-Type', 'application/json').append('Authorization','Bearer'+' '+GlobalService.authtoken);
  //     console.log(headers);
  //     return this.http.post('http://localhost:3000/employee/getcareer',
  //     null,
  //     {headers }) //unncessary key-value
  //     .subscribe(data => dataout = data);
  // }
}
