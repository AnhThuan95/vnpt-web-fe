import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INews} from "../interface/i-news";
import {LinkApiService} from "./link-api.serivce";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient,
              private url: LinkApiService) {
  }

  // getAllNews(): Observable<INews[]> {
  //   return this.http.get<INews[]>(`${this.url.link}/news/all`);
  // }

  getPromotionNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.url.link}/news/category/promotion`);
  }

  getVnptNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.url.link}/news/category/vnpt`);
  }

  getHatinhNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.url.link}/news/category/hatinh`);
  }

  getNews(newsId: number): Observable<INews> {
    return this.http.get<INews>(`${this.url.link}/news/all/${newsId}`);
  }

  createNews(news: Partial<INews>): Observable<INews> {
    return this.http.post<INews>(`${this.url.link}/news/createNews`, news);
  }

  updateNews(news: INews): Observable<INews> {
    return this.http.put<INews>(`${this.url.link}/news/editNews/${news.id}`, news);

  }

  get3PromotionNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.url.link}/news/3news/promotion`);
  }

  get3VnptNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.url.link}/news/3news/vnpt`);
  }

  get3HatinhNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.url.link}/news/3news/hatinh`);
  }
}
