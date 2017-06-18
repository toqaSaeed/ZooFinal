import { Component, OnInit } from '@angular/core';
import {zoneService} from '../AngularService/zone.service'
import { Place } from '../../Interfaces/Places';



@Component({
  selector: 'app-entertain-places',
  templateUrl: './entertain-places.component.html',
  styleUrls: ['./entertain-places.component.css']
})
export class EntertainPlacesComponent implements OnInit {

  Places: any = [];
  places:any[]=[];
  SearchKey:string="";


  constructor(private placServ: zoneService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.placServ.getPlaces().subscribe(Places => {
      console.log(Places);
      this.places =  Places.filter(a=>a.ZoneType._id == '593d1562f42aa705e01002d2');
      console.log(this.places);
    });

}
}



