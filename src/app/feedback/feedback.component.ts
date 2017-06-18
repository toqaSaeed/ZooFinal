import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms';
import {FeedbackService } from '../AngularService/feedback.service';
import { feedbackData} from '../../Interfaces/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  // providers:[FeedbackService]
})
export class FeedbackComponent implements OnInit {

    constructor(private fb: FormBuilder ,private serv:FeedbackService ) {}


    feedback:FormGroup=this.fb.group({
          Name:[null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])],
          Subject:null,
          Mail:[null,Validators.required],
          feedbackType:[null,Validators.required],
          Message:[null,Validators.required]
    });

  ngOnInit() {
}

postMessage(feedback:any){
    this.serv.postFeedback(this.feedback).subscribe(data=>JSON.stringify(data));
  }


}
