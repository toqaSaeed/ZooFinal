import { Component, OnInit } from '@angular/core';
import {Eqyptianpreserve} from '../../Interfaces/EqyptianPreserve';
import {PreserveService} from '../AngularService/preserve.service'

@Component({
  selector: 'app-preserves',
  templateUrl: './preserves.component.html',
  styleUrls: ['./preserves.component.css']
})
export class PreservesComponent implements OnInit {

  constructor(private preserveServ:PreserveService) { }
 
  preserveData: Eqyptianpreserve[]=[];
  counter:Number=0;
  ngOnInit() {
    
    this.preserveServ.getPreserve().subscribe( preserveData=> {this.preserveData=preserveData;
    console.log(this.preserveData)});
  }

}
