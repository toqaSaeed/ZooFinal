import { Injectable } from '@angular/core';
import { Http , RequestOptions, Headers ,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }
  // Get all contacts from the API
  getAllContacts() {
    return this.http.get('http://localhost:3000/contacts')
      .map(res => res.json());
  }

  // Get all Animals from the API
  getAllAnimals() {
    return this.http.get('http://localhost:3000/animals')
      .map(res => res.json());
  }

  // Get all Animal Details from the API  
  getAllAnimalDetails(_id: string) {
    //  console.log("service ",`http://localhost:3000/animals/${_id}`); 
    return this.http.get(`http://localhost:3000/animals/${_id}`)
      .map(res => res.json());
  }

  // Get all Did You Know from the API  
  getAllDidYouKnow() {
    return this.http.get('http://localhost:3000/components').map(res => res.json());
  }

    // Get all FAQ from the API
  getAllFAQs() {
    return this.http.get('http://localhost:3000/faq').map(res => res.json());
  }

   // Get all FAQ Types from the API
  getAllFAQTypes() {
    return this.http.get('http://localhost:3000/faqtype').map(res => res.json());
  }

    // Get all zones(Historical , Entertainment) from the API
  getPlaces() {
    return this.http.get('http://localhost:3000/zones')
      .map(res => res.json());
  }

    // Get all News from the API
  getAllNews() {
    return this.http.get('http://localhost:3000/news')
      .map(res => res.json());
  }

  // Get all Eqyptian preserve data from the API
  getPreserve() {
    return this.http.get('http://localhost:3000/egyptperserves')
      .map(res => res.json());
  }

    // Get all Tickets from the API
  getAllTickets() {
    return this.http.get('http://localhost:3000/tickets')
      .map(res => res.json());
  }

  // Get all Zoos from the API
  getAllZoos() {
    return this.http.get('http://localhost:3000/zoos')
      .map(res => res.json());
  }

    // Get all Feedback from the API
  getAllFeedbacks() {
    return this.http.get('http://localhost:3000/feedback')
      .map(res => res.json());
  }

   // feedback services
   postFeedback(data:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify(data._value);
    return this.http.post('http://localhost:3000/feedback', body,{headers:headers}).map(res => console.log("done"));
  }


  // Staff service 

// get the type of the staff 
    gettype() {
    return this.http.get('http://localhost:3000/stafftype')
      .map(res => res.json());
  }
  
  // Get all staff data from the API
  getAllStaffData() {
    return this.http.get('http://localhost:3000/staff')
      .map(res => res.json());
  }

 


}
