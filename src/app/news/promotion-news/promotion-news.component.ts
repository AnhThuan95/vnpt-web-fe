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
  news3: INews[];

  pageOfItems: Array<any>;
  size = 2;

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsService.getPromotionNews().subscribe(next => {
      this.news = next;
      console.log(next);
    }, error => {
      this.message = error.error;
    });

    this.newsService.get3PromotionNews().subscribe(next => {
      this.news3 = next;
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
