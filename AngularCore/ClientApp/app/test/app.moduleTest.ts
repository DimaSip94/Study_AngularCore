import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponentTest } from './app.componentTest';
import { HeaderTestComponent } from './header.testComponent';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponentTest, HeaderTestComponent],
    bootstrap: [AppComponentTest]
})
export class AppModuleTest { }