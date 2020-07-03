import { Component, OnInit } from '@angular/core';
import {INews} from "../../../interface/i-news";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NewsService} from "../../../service/news.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadService} from "../../../service/upload.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  news: INews;
  data: FormGroup;
  url: any;

  selectedFile: File;
  message: string;

  constructor(private fb: FormBuilder, private newsService: NewsService,
              private router: Router, private uploadService: UploadService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      id:'',
      title: '',
      imgUrl: {
        name: '',
      },
      description: '',
      content: '',
      author: '',
      category: 'vnpt'
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.newsService.getNews(id).subscribe(next => {
        this.news = next;
        this.data.patchValue(this.news);
        this.url = next.imgUrl.name;
      },
      error => {
        console.log(error);
        this.news = null;
      }
    );
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.uploadService.uploadImage(uploadImageData).subscribe(next => {
        console.log(next);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 200) {
          this.url = error.error.text;
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    );
  }

  submit() {
    if (this.url === undefined) {
      this.url = '';
    }
    this.data.value.imgUrl.name = this.url;
    console.log(this.data.value);

    this.newsService.updateNews(this.data.value).subscribe(next => {
        console.log(next);
        alert('Created news!');
      }, (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 200) {
          alert(error.error.text);
          this.router.navigate(['news/vnpt-news/detail',this.data.value.id]).then(e => {
            if (e) {
              console.log('Navigation is successful!');
            } else {
              console.log('Navigation has failed!');
            }
          });
        } else {
          alert('Có lỗi xảy ra, sửa tin không thành công!');
        }
      }
    );
  }
}
