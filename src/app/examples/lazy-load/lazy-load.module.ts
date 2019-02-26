import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  declarations: [LazyLoadComponent, Page1Component, Page2Component, Page3Component],
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ]
})
export class LazyLoadModule { }
