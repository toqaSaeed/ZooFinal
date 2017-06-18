import { Component, OnInit } from '@angular/core';
import { ZoosService} from '../AngularService/zoos.service'

@Component({
  // moduleId: module.id,
  selector: 'app-zoos',
  templateUrl: './zoos.component.html',
  styleUrls: ['./zoos.component.css','../../assets/css/animations.css']
})
export class ZoosComponent implements OnInit {

  zoos: any = [];

  constructor(private zooServ: ZoosService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.zooServ.getAllZoos().subscribe(zoos => {
      this.zoos = zoos;
    });
  }
}
