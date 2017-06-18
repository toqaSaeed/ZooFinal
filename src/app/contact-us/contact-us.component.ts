import { Component, OnInit } from '@angular/core';
import { ContactusService} from '../AngularService/contactus.service';
import { Contact } from '../../Interfaces/Contacts';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 Contacts: any[];

  contacts : Contact[]=[];
  constructor(private contactServ: ContactusService) { }

  ngOnInit() {
     this.contactServ.getAllContacts().subscribe(Contacts => { 
      this.contacts = ( <Contact[]> Contacts).filter(a=>a._id ==  '591381a272860a46281fb503'); 
       console.log(this.contacts);
   })
  }

}
