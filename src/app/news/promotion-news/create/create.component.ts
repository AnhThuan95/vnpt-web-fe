import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NewsService} from "../../../service/news.service";
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UploadService} from "../../../service/upload.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  data: FormGroup;
  url: any;

  selectedFile: File;
  message: string;

  constructor(private fb: FormBuilder, private newsService: NewsService,
              private router: Router, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      title: '',
      imgUrl: {
        name: '',
      },
      description: '',
      content: '',
      author: '',
      category: 'promotion'
    });
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

    this.newsService.createNews(this.data.value).subscribe(next => {
        console.log(next);
        alert('Created news!');
      }, (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 200) {
          alert(error.error.text);
          this.router.navigate(['']).then(e => {
            if (e) {
              console.log('Navigation is successful!');
            } else {
              console.log('Navigation has failed!');
            }
          });
        } else {
          alert('Có lỗi xảy ra, tạo tin không thành công!');
        }
      }
    );
  }
}
