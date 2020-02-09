var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { ItemTest } from './ItemTest';
var AppComponentTest = /** @class */ (function () {
    function AppComponentTest() {
        this.price = 0;
        this.items = [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 }
        ];
    }
    AppComponentTest.prototype.addItem = function (text, price) {
        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new ItemTest(text, price));
    };
    AppComponentTest = __decorate([
        Component({
            selector: 'test-app',
            templateUrl: './app.componentTest.html'
        })
    ], AppComponentTest);
    return AppComponentTest;
}());
export { AppComponentTest };
//# sourceMappingURL=app.componentTest.js.map