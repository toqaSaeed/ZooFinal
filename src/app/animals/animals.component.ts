import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../AngularService/animals.service'
import * as _ from 'lodash';
import {Animal } from '../../Interfaces/Animal';

@Component({
  // moduleId:module.id,
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  SearchKey:string="";
  Mammals: any = [];
  Birds: any[];
  Reptiles:any[];
  Fishes:any[];
  Babies:any[];

  constructor(private animalServ: AnimalsService) { }
  mammal: Animal[] = [];
  birds : Animal[]=[];
  reptiles : Animal[]=[];
  fishes:Animal[]=[];
  babies:Animal[]=[];
  goTo(location: string): void {
    window.location.hash = location;
}
  ngOnInit() {
    // Retrieve mammals from the API
    this.animalServ.getAllAnimals().subscribe(Mammals => { 
      this.mammal = (<Animal[]> Mammals).filter(a=>a.animalType == '591343932f90173e20e41ea8'); 
      // console.log(this.data[0].nickName);
   });

   // Retrieve birds from the API
    this.animalServ.getAllAnimals().subscribe(Birds => { 
      this.birds = (<Animal[]> Birds).filter(a=>a.animalType == '591342a127aee04284dc5a13'); 
   });

   // Retrieve reptiles from the API
    this.animalServ.getAllAnimals().subscribe(Reptiles => { 
      this.reptiles = (<Animal[]> Reptiles).filter(a=>a.animalType == '5939a2bff42aa705e01002c2'); 
   });

  // Retrieve reptiles from the API
    this.animalServ.getAllAnimals().subscribe(Fishes => { 
      this.fishes = (<Animal[]> Fishes).filter(a=>a.animalType == '5939a2e2f42aa705e01002c3'); 
   });

   // Retrieve reptiles from the API
    this.animalServ.getAllAnimals().subscribe(Babies => { 
      this.babies = (<Animal[]> Babies).filter(a=>a.animalType == '5939a36af42aa705e01002c4'); 
   });
//  console.log("Data out: ",this.data);
    
  }

}
