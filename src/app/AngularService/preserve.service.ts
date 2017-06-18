import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PreserveService {


  constructor(private http: Http) { }

  // Get all Eqyptian preserve data from the API
  getPreserve() {
    return this.http.get('http://localhost:3000/egyptperserves')
      .map(res => res.json());
  }

}