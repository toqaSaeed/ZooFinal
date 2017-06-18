import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ZoosService {

constructor(private http: Http) { }

  // Get all posts from the API
  getAllZoos() {
    return this.http.get('http://localhost:3000/zoos')
      .map(res => res.json());
  }

}
