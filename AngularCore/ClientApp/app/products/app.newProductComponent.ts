import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product';
@Component({
    selector: 'new-product',
    templateUrl: './app.newProductComponent.html'
})
export class NewProductComponent {
    items: Product[] = [];
    addItem(form: NgForm) {
        if (form.value.price < 0) {
            form.controls['price'].setErrors({ 'incorrect': true });
            return;
        }
        this.items.push(new Product(0, form.value.name, form.value.description, form.value.price));
    }
}