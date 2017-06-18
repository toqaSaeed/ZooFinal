import { Component, OnInit } from '@angular/core';
import { NewsService } from '../AngularService/news.service';
import { News } from '../../Interfaces/News';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {

News : any[]=[];
news : News[]=[];

  constructor(private newsServ : NewsService) { }

  ngOnInit() {
    this.newsServ.getAllNews().subscribe(News => this.news = (<News[]> News).slice(Math.max(News.length - 3)));
  }

}
