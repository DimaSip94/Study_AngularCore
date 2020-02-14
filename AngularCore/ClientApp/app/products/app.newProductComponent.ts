import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './data.productService'
@Component({
    selector: 'new-product',
    templateUrl: './app.newProductComponent.html',
    styles: [`.hide{display:none}`],
    providers: [ProductService]
})
export class NewProductComponent implements OnInit{
    product: Product = new Product(0,"","",0);
    constructor(private productServ: ProductService) { }
    ngOnInit(): void {
        let url = new URL(window.location.href);
        let id = url.searchParams.get("id");
        if (id) {
            this.getProduct(parseInt(id));
        }
    }
    isErrorSave: boolean = false;
    saveErrorMessage: string = "";
    getProduct(id: number) {
        this.productServ.getProduct(id).subscribe(data => this.product = data["product"]);
    }
    saveItem(prodID: NgModel, prodName: NgModel, prodPrice: NgModel, prodDescription: NgModel) {
        this.isErrorSave = false;
        if (prodPrice.value < 0) {
            this.isErrorSave = true;
            this.saveErrorMessage = "Цена должна быть больше 0";
            return;
        }
        let prod = new Product(prodID.value, prodName.value, prodDescription.value, prodPrice.value);
        console.log(prod);
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