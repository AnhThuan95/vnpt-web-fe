import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkApiService} from "./link-api.serivce";
import {IFile} from "../interface/i-file";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient,
              private url: LinkApiService) {
  }

  getImage(imageName: string): Observable<IFile> {
    return this.http.get<IFile>(`${this.url.link}/upload/${imageName}`);
  }

  uploadImage(uploadImageData: FormData) {
    return this.http.post(`${this.url.link}/upload`, uploadImageData);
  }
}
