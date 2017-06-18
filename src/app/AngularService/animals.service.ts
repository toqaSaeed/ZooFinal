import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class AnimalsService {


  constructor(private http: Http) { }

  // Get all posts from the API
  getAllAnimals() {
    return this.http.get('http://localhost:3000/animals')
      .map(res => res.json());
  }


}