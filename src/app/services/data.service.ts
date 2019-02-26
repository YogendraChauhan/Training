import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/users';
  }

  getAllUsers() {
    return this.http.get(this.url);
  }
}
