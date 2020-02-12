var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Product } from './product';
var NewProductComponent = /** @class */ (function () {
    function NewProductComponent() {
        this.product = new Product(0, "", "", 0);
        this.items = [];
    }
    NewProductComponent.prototype.addItem = function () {
        this.items.push(new Product(0, this.product.Name, this.product.Description, this.product.Price));
    };
    NewProductComponent = __decorate([
        Component({
            selector: 'new-product',
            templateUrl: './app.newProductComponent.html'
        })
    ], NewProductComponent);
    return NewProductComponent;
}());
export { NewProductComponent };
//# sourceMappingURL=app.newProductComponent.js.map