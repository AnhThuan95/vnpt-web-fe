import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IntroductionComponent} from "./introduction.component";
import {BusinessComponent} from "./business/business.component";
import {HeadquartersComponent} from "./headquarters/headquarters.component";
import {OrganizationsComponent} from "./organizations/organizations.component";

const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'headquarters',
    component: HeadquartersComponent
  },
  {
    path: 'organizations',
    component: OrganizationsComponent
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
export class IntroductionRoutingModule {
}
