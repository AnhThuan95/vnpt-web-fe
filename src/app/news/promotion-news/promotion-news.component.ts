import { Component, OnInit } from '@angular/core';
import {INews} from "../../interface/i-news";
import {NewsService} from "../../service/news.service";
import {UploadService} from "../../service/upload.service";

@Component({
  selector: 'app-promotion-news',
  templateUrl: './promotion-news.component.html',
  styleUrls: ['./promotion-news.component.css']
})
export class PromotionNewsComponent implements OnInit {
  news: INews[];
  message: string;

  urls: string[] = [];
  retrievedImage: string;

  constructor(private newsService: NewsService,
              private uploadService: UploadService) { }

  ngOnInit(){
    this.newsService.getPromotionNews().subscribe(next => {
      this.news = next;
      console.log(next);

      for (let i = 0; i < this.news.length; i++) {
        this.urls.push('');
      }

      for (let i = 0; i < this.news.length; i++) {
        if (this.news[i].imgUrl !== null) {
          this.uploadService.getImage(this.news[i].imgUrl.name)
            .subscribe(
              res => {
                this.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;
                this.urls.splice(i, 1, this.retrievedImage);
              }
            );
        } else {
          this.urls.splice(i, 1, null);
        }
      }
      console.log(this.urls);
    }, error => {
      this.message = error.error;
    });
  }
}
