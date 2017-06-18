import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class zoneService {

  constructor(private http: Http) { }

    // Get all zones(Historical , Entertainment) from the API
  getPlaces() {
    return this.http.get('http://localhost:3000/zones')
      .map(res => res.json());
  }

}
