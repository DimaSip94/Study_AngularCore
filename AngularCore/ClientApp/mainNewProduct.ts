import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NewProductModule } from './app/products/app.newProductModule';
const platform = platformBrowserDynamic();
platform.bootstrapModule(NewProductModule);