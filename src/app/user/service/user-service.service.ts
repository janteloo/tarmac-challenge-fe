import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:8080';
  
  constructor(private  httpClient:  HttpClient) {}

  getWorkers(pageNumber : number) : any {
    return this.httpClient.get(`${this.API_URL}/workers?sort=name&page=${pageNumber}` );
  }

  findWorkersByName(name: string) : any {
    return this.httpClient.get(`${this.API_URL}/workers/search/byName?name=${name}`);
  }

  findWorkersByRole(role: string) : any {
    return this.httpClient.get(`${this.API_URL}/workers/search/byRole?role=${role}`);
  }
}
