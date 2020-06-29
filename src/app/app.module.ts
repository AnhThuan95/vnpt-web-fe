import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {JwPaginationModule} from "jw-angular-pagination";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import {PromotionNewsComponent} from './news/promotion-news/promotion-news.component';
import {PromotionNewsModule} from "./news/promotion-news/promotion-news.module";
import {HatinhNewsComponent} from './news/hatinh-news/hatinh-news.component';
import {VnptNewsComponent} from './news/vnpt-news/vnpt-news.component';

import {TransactionComponent} from './support/transaction/transaction.component';
import {TransactionModule} from "./support/transaction/transaction.module";

import {IntroductionComponent} from './introduction/introduction.component';
import {IntroductionModule} from "./introduction/introduction.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PromotionNewsComponent,
    HatinhNewsComponent,
    VnptNewsComponent,
    TransactionComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PromotionNewsModule,
    TransactionModule,
    HttpClientModule,
    FormsModule,
    JwPaginationModule,
    IntroductionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
