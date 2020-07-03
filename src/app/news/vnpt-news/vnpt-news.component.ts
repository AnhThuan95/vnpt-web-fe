import { Component, OnInit } from '@angular/core';
import {INews} from "../../interface/i-news";
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-vnpt-news',
  templateUrl: './vnpt-news.component.html',
  styleUrls: ['./vnpt-news.component.css']
})
export class VnptNewsComponent implements OnInit {
  news: INews[];
  message: string;
  news3: INews[];

  pageOfItems: Array<any>;
  size = 5;

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsService.getVnptNews().subscribe(next => {
      this.news = next;
      console.log(next);
    }, error => {
      this.message = error.error;
    });

    this.newsService.get3VnptNews().subscribe(next => {
      this.news3 = next;
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
