var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './data.productService';
var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(productServ) {
        this.productServ = productServ;
        this.productID = 0;
        this.isErrorSave = false;
        this.saveErrorMessage = "";
    }
    NewProductComponent.prototype.ngOnInit = function () {
        var url = new URL(window.location.href);
        var id = url.searchParams.get("id");
        if (id) {
            this.productID = parseInt(id);
            this.getProduct(this.productID);
        }
    };
    NewProductComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productServ.getProduct(id).subscribe(function (data) { return _this.fillNgForm(data); });
    };
    NewProductComponent.prototype.fillNgForm = function (data) {
        console.log(data);
    };
    NewProductComponent.prototype.saveItem = function (form) {
        var _this = this;
        if (form.value.price < 0) {
            form.controls['price'].setErrors({ 'incorrect': true });
            return;
        }
        var prod = new Product(this.productID, form.value.name, form.value.description, form.value.price);
        this.productServ.updateCreateProduct(prod).subscribe(function (data) { return _this.checkAdd(data); });
    };
    NewProductComponent.prototype.checkAdd = function (data) {
        this.isErrorSave = false;
        if (data.result) {
            location.href = "/home/index";
        }
        else {
            this.isErrorSave = true;
            this.saveErrorMessage = data.errorMsg;
        }
    };
    NewProductComponent = __decorate([
        Component({
            selector: 'new-product',
            templateUrl: './app.newProductComponent.html',
            styles: [".hide{display:none}"],
            providers: [ProductService]
        }),
        __metadata("design:paramtypes", [ProductService])
    ], NewProductComponent);
    return NewProductComponent;
}());
export { NewProductComponent };
//# sourceMappingURL=app.newProductComponent.js.map