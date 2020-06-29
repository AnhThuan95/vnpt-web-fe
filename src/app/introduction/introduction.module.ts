import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroductionRoutingModule} from "./introduction-routing.module";
import {BusinessComponent} from "./business/business.component";
import {OrganizationsComponent} from "./organizations/organizations.component";
import {HeadquartersComponent} from "./headquarters/headquarters.component";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    BusinessComponent,
    OrganizationsComponent,
    HeadquartersComponent
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    AgmCoreModule
  ]
})
export class IntroductionModule {
}
