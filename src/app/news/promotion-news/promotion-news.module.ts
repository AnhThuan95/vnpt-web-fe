import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {EditComponent} from "./edit/edit.component";
import {PromotionNewsRoutingModule} from "./promotion-news-routing.module";

@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    EditComponent],
  imports: [
    CommonModule,
    PromotionNewsRoutingModule
  ]
})
export class PromotionNewsModule { }
