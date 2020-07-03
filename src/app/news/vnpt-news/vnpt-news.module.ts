import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {EditComponent} from "./edit/edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {VnptNewsRoutingModule} from "./vnpt-news-routing.module";

@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    VnptNewsRoutingModule,
    ReactiveFormsModule
  ]
})
export class VnptNewsModule { }
