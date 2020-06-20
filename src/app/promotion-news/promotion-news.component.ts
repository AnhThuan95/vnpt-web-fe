import { Component, OnInit } from '@angular/core';
import {INews} from "../interface/i-news";
import {NewsService} from "../service/news.service";

@Component({
  selector: 'app-promotion-news',
  templateUrl: './promotion-news.component.html',
  styleUrls: ['./promotion-news.component.css']
})
export class PromotionNewsComponent implements OnInit {
  news: INews[];
  message: string;
  config: any;

  public maxSize = 7;
  public directionLinks = true;
  public autoHide = false;
  public responsive = true;
  public labels: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsService.getPromotionNews().subscribe(next => {
      this.news = next;
      console.log(next);

      this.config = {
        itemsPerPage: 2,
        currentPage: 1,
        totalItems: this.news.length
      };
    }, error => {
      this.message = error.error.message;
    });
  }

  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }
}
