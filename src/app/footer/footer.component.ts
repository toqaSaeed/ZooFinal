import { Component, OnInit } from '@angular/core';
// import { ContactusService } from '../contactus.service';
import { ContactusService} from '../AngularService/contactus.service'
import { Contact } from '../../Interfaces/Contacts'


@Component({
  // moduleId: module.id,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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


