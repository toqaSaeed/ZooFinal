import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FaqTypeService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllFAQTypes() {
    return this.http.get('http://localhost:3000/faqtype').map(res => res.json());
  }

}
