import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers ,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

 constructor(private http: Http) { }

  // Get all posts from the API
  getAllFeedbacks() {
    return this.http.get('http://localhost:3000/feedback')
      .map(res => res.json());
  }

   postFeedback(data:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify(data._value);
    return this.http.post('http://localhost:3000/feedback', 
    body,{headers:headers}).map(res => console.log("done"));
  }

}