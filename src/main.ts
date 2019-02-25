import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { ExamplesModule } from './app/examples.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ExamplesModule)
  .catch(err => console.log(err));
