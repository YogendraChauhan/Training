import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { PageNotFoundComponent } from './examples/page-not-found/page-not-found.component';

@NgModule({
  declarations: [ExamplesComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ExamplesRoutingModule
  ],
  bootstrap: [ExamplesComponent]
})
export class ExamplesModule { }
