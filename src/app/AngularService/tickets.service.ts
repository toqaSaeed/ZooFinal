
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketsService {

constructor(private http: Http) { }

  // Get all posts from the API
  getAllTickets() {
    return this.http.get('http://localhost:3000/tickets')
      .map(res => res.json());
  }

}