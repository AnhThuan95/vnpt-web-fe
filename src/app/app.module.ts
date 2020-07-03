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
import { AgmCoreModule } from '@agm/core';

import {PromotionNewsComponent} from './news/promotion-news/promotion-news.component';
import {PromotionNewsModule} from "./news/promotion-news/promotion-news.module";
import {HatinhNewsComponent} from './news/hatinh-news/hatinh-news.component';
import {VnptNewsComponent} from './news/vnpt-news/vnpt-news.component';

import {TransactionComponent} from './support/transaction/transaction.component';
import {TransactionModule} from "./support/transaction/transaction.module";

import {IntroductionComponent} from './introduction/introduction.component';
import {IntroductionModule} from "./introduction/introduction.module";
import { ProvinceComponent } from './support/province/province.component';
import { InternationalComponent } from './support/international/international.component';

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
    ProvinceComponent,
    InternationalComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWIG91eX9VIfqBQMJjnLAsXZb3ncn6-wI'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
