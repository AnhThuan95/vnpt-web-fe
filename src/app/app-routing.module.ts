import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {VnptNewsComponent} from "./news/vnpt-news/vnpt-news.component";
import {HatinhNewsComponent} from "./news/hatinh-news/hatinh-news.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news/promotion-news',
    loadChildren: './news/promotion-news/promotion-news-routing.module#PromotionNewsRoutingModule'
  },
  {
    path: 'news/vnpt-news',
    component: VnptNewsComponent,
  },
  {
    path: 'news/hatinh-news',
    component: HatinhNewsComponent,
  },
  {
    path: 'support/transaction',
    loadChildren: './support/transaction/transaction-routing.module#TransactionRoutingModule'
  }
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
