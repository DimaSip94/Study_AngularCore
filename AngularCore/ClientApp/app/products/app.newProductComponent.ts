import { Component } from '@angular/core';
import { Product } from './product';
@Component({
    selector: 'new-product',
    templateUrl: './app.newProductComponent.html'
})
export class NewProductComponent {

    product: Product = new Product(0,"","",0);

    items: Product[] = [];

    addItem() {
        this.items.push(new Product(0, this.product.Name, this.product.Description, this.product.Price));
    }
}