import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FaqService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllFAQs() {
    return this.http.get('http://localhost:3000/faq').map(res => res.json());
  }

}
