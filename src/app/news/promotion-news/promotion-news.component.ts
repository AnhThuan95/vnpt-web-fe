import { Component, OnInit } from '@angular/core';
import {INews} from "../../interface/i-news";
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-promotion-news',
  templateUrl: './promotion-news.component.html',
  styleUrls: ['./promotion-news.component.css']
})
export class PromotionNewsComponent implements OnInit {
  news: INews[];
  message: string;

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsService.getPromotionNews().subscribe(next => {
      this.news = next;
      console.log(next);
    }, error => {
      this.message = error.error.message;
    });
  }
}
