import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class DiduKnowService {


  constructor(private http: Http) { }


 // Get all Did You Know from the API  
  getAllDidYouKnow() {
    return this.http.get('http://localhost:3000/components').map(res => res.json());
  }


}
