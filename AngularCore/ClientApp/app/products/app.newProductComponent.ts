import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './data.productService'
@Component({
    selector: 'new-product',
    templateUrl: './app.newProductComponent.html',
    providers: [ProductService]
})
export class NewProductComponent {
    constructor(private productServ: ProductService) { }
    items: Product[] = [];
    addItem(form: NgForm) {
        if (form.value.price < 0) {
            form.controls['price'].setErrors({ 'incorrect': true });
            return;
        }
        let prod = new Product(0, form.value.name, form.value.description, form.value.price);
        this.items.push(prod);
        this.productServ.updateCreateProduct(prod)
    }
}