import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StaffTypeService {

constructor(private http: Http) { }

  gettype() {
    return this.http.get('http://localhost:3000/stafftype')
      .map(res => res.json());
  }
  
}