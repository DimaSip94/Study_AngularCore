import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './data.productService'
@Component({
    selector: 'new-product',
    templateUrl: './app.newProductComponent.html',
    styles: [`.hide{display:none}`],
    providers: [ProductService]
})
export class NewProductComponent {
    constructor(private productServ: ProductService) { }
    items: Product[] = [];
    isErrorSave: boolean = false;
    saveErrorMessage: string = "";
    addItem(form: NgForm) {
        if (form.value.price < 0) {
            form.controls['price'].setErrors({ 'incorrect': true });
            return;
        }
        let prod = new Product(0, form.value.name, form.value.description, form.value.price);
        this.productServ.updateCreateProduct(prod).subscribe(data => this.checkAdd(data));
    }
    checkAdd(data: any) {
        this.isErrorSave = false;
        if (data.result) {
            location.href = "/home/index";
        } else {
            this.isErrorSave = true;
            this.saveErrorMessage = data.errorMsg;
        }
    }
}