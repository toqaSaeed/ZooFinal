import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactusService {

  constructor(private http: Http) { }

   // Get all contacts from the API
  getAllContacts() {
    return this.http.get('http://localhost:3000/contacts')
      .map(res => res.json());
  }

}
