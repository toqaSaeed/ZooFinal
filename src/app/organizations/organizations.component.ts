import { Component, OnInit } from '@angular/core';
import { ComponentsService} from '../AngularService/components.service'
import { Componentt } from '../../Interfaces/component'

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  Components: any[];

  components : Componentt[]=[];
  constructor(private compServ: ComponentsService) { }

  ngOnInit() {
     this.compServ.  getAllComponents().subscribe(Components => { 
      this.components = ( <Componentt[]> Components).filter(a=>a.compType ==  '59137d3fbfb40345ecab80cd'); 
       console.log(this.components);
   })
  }

}
