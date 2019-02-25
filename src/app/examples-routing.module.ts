import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExampleModule } from './examples/form/form-example.module';
import { ReactiveFormExampleComponent } from './examples/form/reactive-form-example/reactive-form-example.component';
import { TemplateDrivenFormExampleComponent } from './examples/form/template-driven-form-example/template-driven-form-example.component';
import { PageNotFoundComponent } from './examples/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'form/reactive',
    data: { name: 'Reactive Form Example' },
    component: ReactiveFormExampleComponent
  },
  {
    path: 'form/template-driven',
    data: { name: 'Template Driven Form Example' },
    component: TemplateDrivenFormExampleComponent
  },
  {
    path: '',
    redirectTo: '/form/reactive',
    pathMatch: 'full'
  },
  {
    path: '**',
    data: { name: 'Page Not Found!' },
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    FormExampleModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
