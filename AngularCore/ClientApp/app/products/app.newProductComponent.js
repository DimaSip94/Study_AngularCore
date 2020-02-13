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
        this.items = [];
    }
    NewProductComponent.prototype.addItem = function (form) {
        if (form.value.price < 0) {
            form.controls['price'].setErrors({ 'incorrect': true });
            return;
        }
        var prod = new Product(0, form.value.name, form.value.description, form.value.price);
        this.items.push(prod);
        this.productServ.updateCreateProduct(prod);
    };
    NewProductComponent = __decorate([
        Component({
            selector: 'new-product',
            templateUrl: './app.newProductComponent.html',
            providers: [ProductService]
        }),
        __metadata("design:paramtypes", [ProductService])
    ], NewProductComponent);
    return NewProductComponent;
}());
export { NewProductComponent };
//# sourceMappingURL=app.newProductComponent.js.map