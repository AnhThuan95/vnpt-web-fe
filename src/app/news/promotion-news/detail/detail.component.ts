import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../service/news.service";
import {ActivatedRoute, Router} from "@angular/router";
import {INews} from "../../../interface/i-news";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  news: INews;
  message: string;
  strs: string[] = [];
  news3: INews[];

  constructor(private newsService: NewsService, private router: Router,
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
    );

    this.newsService.get3PromotionNews().subscribe(next => {
      this.news3 = next;
    })
  }

  delete() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.newsService.deleteNews(id).subscribe(next => {
      console.log(next);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 200) {
        this.router.navigate(['news/promotion-news']).then(e => {
          if (e) {
            console.log('Navigation is successful!');
          } else {
            console.log('Navigation has failed!');
          }
        });
      } else {
        this.message = 'error';
      }
    });
  }
}
