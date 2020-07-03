import { Component, OnInit } from '@angular/core';
import {INews} from "../../interface/i-news";
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-hatinh-news',
  templateUrl: './hatinh-news.component.html',
  styleUrls: ['./hatinh-news.component.css']
})
export class HatinhNewsComponent implements OnInit {
  news: INews[];
  message: string;
  news3: INews[];

  pageOfItems: Array<any>;
  size = 5;

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsService.getHatinhNews().subscribe(next => {
      this.news = next;
      console.log(next);
    }, error => {
      this.message = error.error;
    });

    this.newsService.get3HatinhNews().subscribe(next => {
      this.news3 = next;
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
