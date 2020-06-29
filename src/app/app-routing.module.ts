import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    loadChildren: () => import('./news/promotion-news/promotion-news-routing.module').then(m => m.PromotionNewsRoutingModule)
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
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction-routing.module').then(m => m.IntroductionRoutingModule)
  },
  {
    path: 'support/transaction',
    loadChildren: () => import('./support/transaction/transaction-routing.module').then(m => m.TransactionRoutingModule)
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
export class AppRoutingModule {
}
