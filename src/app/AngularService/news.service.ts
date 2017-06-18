import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

constructor(private http: Http) { }

  // Get all posts from the API
  getAllNews() {
    return this.http.get('http://localhost:3000/news')
      .map(res => res.json());
  }

}
