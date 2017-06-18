import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AnimalDetailService} from '../AngularService/animaldetails.service'
import { Animal } from '../../Interfaces/Animal'


@Component({
  // moduleId: module.id,
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  animals :any =[];
  details : any =[];
  // details: Animal;
  constructor(private animalDetailsServ: AnimalDetailService, private actRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.animalDetailsServ.getAllAnimalDetails(this.actRoute.snapshot.params['id'])
      .subscribe(Details => {
        this.animals=Details;
        this.details = Details.animalType;
       console.log("dddddd",this.details);
      });
  }

}

