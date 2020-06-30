import { Component, OnInit } from '@angular/core';
import {INews} from "../interface/i-news";
import {NewsService} from "../service/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news4: INews[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.get4PromotionNews().subscribe(next => {
      this.news4 = next;
    })
  }

}
