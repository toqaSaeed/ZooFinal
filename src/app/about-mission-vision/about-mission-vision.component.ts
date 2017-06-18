import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../AngularService/components.service';
import { Componentt } from '../../Interfaces/component'

@Component({
  selector: 'app-about-mission-vision',
  templateUrl: './about-mission-vision.component.html',
  styleUrls: ['./about-mission-vision.component.css']
})
export class AboutMissionVisionComponent implements OnInit {

Mission:any[]=[];
mission: Componentt[]=[];
  constructor(private compServ : ComponentsService) { }

  ngOnInit() {
    this.compServ.getAllComponents().subscribe(Mission =>this.mission = (<Componentt[]> Mission).filter(a=>a._id == "59427e13c2468f0b88f815a6"))
  }

}
