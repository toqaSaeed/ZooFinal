import { Component, OnInit } from '@angular/core';
import {FaqService} from '../AngularService/faq.service';
import {FaqTypeService} from '../AngularService/FAQType.service'

import {FAQ} from '../../Interfaces/FAQ';
import {FAQType} from '../../Interfaces/FAQType';

@Component({
  // moduleId:module.id,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css','../../assets/css/TipsStyle.css']
})
export class FaqComponent implements OnInit {

 faq: FAQ[] = [];
 faqtype: FAQType[]=[];

  constructor(private faqserv: FaqService , private typeServ : FaqTypeService ) { }

  ngOnInit() {
    // Retrieve all the questions and answers of faq from the API
    this.faqserv.getAllFAQs().subscribe(faq => { this.faq = (<FAQ[]>faq);
    console.log(this.faq);});

    // retrieve the faq type from the database 
     this.typeServ.getAllFAQTypes().subscribe(faqtype => { this.faqtype = (<FAQType[]>faqtype);});
  }
} 