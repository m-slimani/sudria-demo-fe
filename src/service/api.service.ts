import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ressource } from 'src/app/pages/consult/Ressource';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) {}



public createRessource(ressource: Ressource) {
  // return this.httpClient.post<any>(`${this.apiURL}/users/authenticate`, {username, password})
  // .pipe(map(res => {
  //     return res;
  // }));
  const username = 'user';
  const password = 'password';

  return this.httpClient.post<any>(`${this.apiURL}/users/authenticate`, { username, password })
  .pipe(map(resp => {
  }));
}

public updateRessource(ressource: Ressource) {}

public deleteRessource(id: number) {}

public getRessourceById(id: number) {}

public getRessources(url?: string) {
  const username = 'user';
  const password = 'password';


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Basic ' +  btoa(username + ':' + password)
    })
  };

  // const myHeaders  = new HttpHeaders();
  // myHeaders .append('Authorization', 'Basic ' + btoa(username + ':' + password));
  // myHeaders .append('Content-Type', 'application/json');

  return this.httpClient.get<Ressource[]>(`${this.apiURL}/animals`, httpOptions);
  // .pipe(map(resp => {
  //   debugger;
  //   console.log(resp);
  // }));
}
}
