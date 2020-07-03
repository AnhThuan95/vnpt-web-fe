import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProvinceComponent} from "./support/province/province.component";
import {InternationalComponent} from "./support/international/international.component";

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
    loadChildren: () => import('./news/vnpt-news/vnpt-news-routing.module').then(m => m.VnptNewsRoutingModule)
  },
  {
    path: 'news/hatinh-news',
    loadChildren: () => import('./news/hatinh-news/hatinh-news-routing.module').then(m => m.HatinhNewsRoutingModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction-routing.module').then(m => m.IntroductionRoutingModule)
  },
  {
    path: 'support/transaction',
    loadChildren: () => import('./support/transaction/transaction-routing.module').then(m => m.TransactionRoutingModule)
  },
  {
    path: 'support/province',
    component: ProvinceComponent
  },
  {
    path: 'support/international',
    component: InternationalComponent
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
