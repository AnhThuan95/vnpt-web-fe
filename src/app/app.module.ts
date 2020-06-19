import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionNewsComponent } from './promotion-news/promotion-news.component';
import { HatinhNewsComponent } from './hatinh-news/hatinh-news.component';
import { VnptNewsComponent } from './vnpt-news/vnpt-news.component';
import {PromotionNewsModule} from "./promotion-news/promotion-news.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PromotionNewsComponent,
    HatinhNewsComponent,
    VnptNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PromotionNewsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
