import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleTest } from './app/app.moduleTest';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModuleTest);