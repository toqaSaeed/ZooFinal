import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../AngularService/animals.service';
import { zoneService } from '../AngularService/zone.service';
import { Place } from '../../Interfaces/Places';
import { Animal } from '../../Interfaces/Animal'
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  constructor(private animalServ: AnimalsService, private zoneServ: zoneService) { }
  animals: any = [];
  places: any = [];
  details:any=[];
  // Historical: Place[] = [];
  ngOnInit() {
    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
      }
      else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');



      }
    });

    this.animalServ.getAllAnimals()
      .subscribe(animals => {
        this.animals = animals;
      });
    this.zoneServ.getPlaces()
      .subscribe(Places => {
        this.places = Places;
        // this.details=Places.ZoneType;
        console.log(this.places);
      });

  }



}
