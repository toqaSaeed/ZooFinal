import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StaffService {

constructor(private http: Http) { }

  // Get all posts from the API
  getAllStaffData() {
    return this.http.get('http://localhost:3000/staff')
      .map(res => res.json());
  }



}