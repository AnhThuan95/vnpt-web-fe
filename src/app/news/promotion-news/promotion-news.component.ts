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

      for (const test of this.news) {
        if (test.imgUrl !== null) {
          this.uploadService.getImage(test.imgUrl.name)
            .subscribe(
              res => {
                this.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;
                this.urls.push(this.retrievedImage);
              }
            );
        }
      }
    }, error => {
      this.message = error.error;
    });
  }
}
