import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http: HttpClient) { }


  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res })
      );
  }
  adduser(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        data
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }
}
