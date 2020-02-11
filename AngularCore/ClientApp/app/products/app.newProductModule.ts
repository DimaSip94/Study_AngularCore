import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './app.newProductComponent';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [NewProductComponent],
    bootstrap: [NewProductComponent]
})
export class NewProductModule { }