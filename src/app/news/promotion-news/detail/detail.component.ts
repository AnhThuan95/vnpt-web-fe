import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../../service/news.service";
import {ActivatedRoute} from "@angular/router";
import {INews} from "../../../interface/i-news";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  news: INews;
  message: string;
  strs: string[] = [];

  constructor(private newsService: NewsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.newsService.getNews(id).subscribe(next => {
        console.log(next);
        this.news = next;
        this.strs = this.news.content.split('\n');
      },
      error => {
        console.log(error);
        this.message = error.error.message;
      }
    )
  }
}
