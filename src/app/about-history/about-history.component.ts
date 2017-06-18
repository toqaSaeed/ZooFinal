import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../AngularService/components.service';
import { Componentt } from '../../Interfaces/component';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-about-history',
  templateUrl: './about-history.component.html',
  styleUrls: ['./about-history.component.css']
})
export class AboutHistoryComponent implements OnInit {

  constructor(private  _aboutService: ComponentsService) { }
History : Componentt[]=[];

  
  ngOnInit() {
    this._aboutService.getAllComponents().subscribe((histories:any) => { this.History=  histories.filter(a=>a.compType == '5942dc70c2468f0b88f815a7');});

}


}


