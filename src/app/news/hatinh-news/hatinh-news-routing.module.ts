import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {EditComponent} from "./edit/edit.component";
import {HatinhNewsComponent} from "./hatinh-news.component";

const routes: Routes = [
  {
    path: '',
    component: HatinhNewsComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class HatinhNewsRoutingModule {
}
