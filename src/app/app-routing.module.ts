import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PromotionNewsComponent} from "./promotion-news/promotion-news.component";
import {VnptNewsComponent} from "./vnpt-news/vnpt-news.component";
import {HatinhNewsComponent} from "./hatinh-news/hatinh-news.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news/promotion-news',
    component: PromotionNewsComponent,
  },
  {
    path: 'news/vnpt-news',
    component: VnptNewsComponent,
  },
  {
    path: 'news/hatinh-news',
    component: HatinhNewsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
