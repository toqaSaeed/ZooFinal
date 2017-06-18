import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComponentsService {

  constructor(private http: Http) { }

    // Get all components from the API
  getAllComponents() {
    return this.http.get('http://localhost:3000/components')
      .map(res => res.json());
  }

}
