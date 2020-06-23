import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {EditComponent} from "./edit/edit.component";
import {PromotionNewsRoutingModule} from "./promotion-news-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    EditComponent],
    imports: [
        CommonModule,
        PromotionNewsRoutingModule,
        ReactiveFormsModule
    ]
})
export class PromotionNewsModule { }
