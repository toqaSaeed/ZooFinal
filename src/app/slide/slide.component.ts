import {Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import {CarouselComponent, Direction} from  '../carousal/carousal.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})



export class SlideComponent implements OnInit, OnDestroy {
  
    @Input() public index:number;
    @Input() public direction:Direction;

    @HostBinding('class.active')
    @Input() public active:boolean;

    @HostBinding('class.item')
    @HostBinding('class.carousel-item')
    private addClass:boolean = true;

    constructor(private carousel:CarouselComponent) {
    }

    public ngOnInit() {
        this.carousel.addSlide(this);
    }

    public ngOnDestroy() {
        // this.carousel.removeSlide(this);
    }
}
