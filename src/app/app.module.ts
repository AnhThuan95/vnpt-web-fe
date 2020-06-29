import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PromotionNewsComponent} from './news/promotion-news/promotion-news.component';
import {HatinhNewsComponent} from './news/hatinh-news/hatinh-news.component';
import {VnptNewsComponent} from './news/vnpt-news/vnpt-news.component';
import {PromotionNewsModule} from "./news/promotion-news/promotion-news.module";
import {HttpClientModule} from "@angular/common/http";
import {TransactionComponent} from './support/transaction/transaction.component';
import {TransactionModule} from "./support/transaction/transaction.module";
import {FormsModule} from "@angular/forms";
import {JwPaginationModule} from "jw-angular-pagination";
import { IntroductionComponent } from './introduction/introduction.component';
import { OrganizationsComponent } from './introduction/organizations/organizations.component';
import { HeadquartersComponent } from './introduction/headquarters/headquarters.component';
import { BusinessComponent } from './introduction/business/business.component';

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
    OrganizationsComponent,
    HeadquartersComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PromotionNewsModule,
    TransactionModule,
    HttpClientModule,
    FormsModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
