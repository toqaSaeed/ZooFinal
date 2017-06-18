import { Component, OnInit } from '@angular/core';
import { NewsService } from '../AngularService/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news: any = [];
SearchKey:string="";
SearchDate:string = "" ;


  constructor(private newsServ: NewsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.newsServ.getAllNews().subscribe(news => {
      this.news = news
    });
  }

}
