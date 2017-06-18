import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../AngularService/components.service';

@Component({
  // moduleId:module.id,
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private compServ:ComponentsService) { }
data:any[]=[];
  ngOnInit() {
     this.compServ.getAllComponents().subscribe(data=>{
      this.data=data.filter(d=>d.compType=='594073c0bc1cd0423c5fb7d2');
      console.log(this.data);
     })
  }

  getDataByTitle(title:string){
    return this.data.filter(d=>d.Title==title);
  }



}
