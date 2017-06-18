import { Component, OnInit } from '@angular/core';
import { StaffService} from '../AngularService/staff.service';
import { StaffTypeService} from '../AngularService/stafftype.service';
import {Staff} from '../../Interfaces/Staff'
import {staffType } from '../../Interfaces/stafftype';


@Component({
  // moduleId:module.id,
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private staffServ:StaffService , private TypeServ : StaffTypeService) { }
  
  staffData:Staff[]=[];
   type:staffType[]=[];
  ngOnInit() {
    // this services to get the type of the staff
   
     this.staffServ.getAllStaffData().subscribe(staffData=>{this.staffData=staffData;});
     this.TypeServ.gettype().subscribe(type=>{this.type=type;});
  }
}
