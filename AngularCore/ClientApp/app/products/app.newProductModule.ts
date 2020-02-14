import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './app.newProductComponent';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [NewProductComponent],
    bootstrap: [NewProductComponent]
})
export class NewProductModule { }