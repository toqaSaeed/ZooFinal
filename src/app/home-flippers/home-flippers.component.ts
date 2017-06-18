import { Component, OnInit } from '@angular/core';
import { ZoosService } from '../AngularService/zoos.service';
import { Zoo } from '../../Interfaces/Zoo';
import * as $ from 'jquery';
@Component({
  selector: 'app-home-flippers',
  templateUrl: './home-flippers.component.html',
  styleUrls: ['./home-flippers.component.css','../../assets/css/mystyle.css','../../assets/css/home.css']
})
export class HomeFlippersComponent implements OnInit {
  Zoos: any[] = [];
  zoos: Zoo[] = [];
  hours:any;
  date:any = new Date().getHours();


  constructor(private zooServ: ZoosService) { }

  ngOnInit() {
    if ($('html').hasClass('csstransforms3d')) {
      $('.artGroup').removeClass('slide').addClass('flip');
      $('.artGroup.flip').on('mouseenter',
        function () {
          $(this).find('.artwork').addClass('theFlip');
        });
      $('.artGroup.flip').on('mouseleave',
        function () {
          $(this).find('.artwork').removeClass('theFlip');
        });
    } else {
      $('.artGroup').on('mouseenter',
        function () {
          $(this).find('.detail').stop().animate({ bottom: 0 }, 500, 'easeOutCubic');
        });
      $('.artGroup').on('mouseleave',
        function () {
          $(this).find('.detail').stop().animate({ bottom: ($(this).height() + -1) }, 500, 'easeOutCubic');
        });
    }


    this.zooServ.getAllZoos().subscribe(Zoos => {
      this.zoos = (<Zoo[]>Zoos).filter(a => a._id == '5913121eb939a209e4819bea');
    });



  }

}
