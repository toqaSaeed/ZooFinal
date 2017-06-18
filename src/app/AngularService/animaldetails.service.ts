import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class AnimalDetailService {


  constructor(private http: Http) { }


  // Get all Animal Details from the API  
  getAllAnimalDetails(_id: string) {
    //  console.log("service ",`http://localhost:3000/animals/${_id}`); 
    return this.http.get(`http://localhost:3000/animals/${_id}`)
      .map(res => res.json());
  }


}