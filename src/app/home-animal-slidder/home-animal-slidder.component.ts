import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-animal-slidder',
  templateUrl: './home-animal-slidder.component.html',
  styleUrls: ['./home-animal-slidder.component.css']
})
export class HomeAnimalSlidderComponent {
//The time to show the next photo
    private NextPhotoInterval:number = 3000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }
     

    private addNewSlide() {
         this.slides.push(
            {image:'../../assets/images/ele2.png',text:'Animal 1'},
            {image:'../../assets/images/giff.png',text:'Animal 2'},
            {image:'../../assets/images/zeb.png',text:'Animal 3'},
            // {image:'../../assets/images/',text:'Animal 4'},
            // {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            // {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );
    }


}


