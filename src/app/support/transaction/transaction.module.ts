import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {TransactionRoutingModule} from "./transaction-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule {
}
