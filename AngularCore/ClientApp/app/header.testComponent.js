var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
var HeaderTestComponent = /** @class */ (function () {
    function HeaderTestComponent() {
        this.textChange = new EventEmitter();
        this.priceChange = new EventEmitter();
    }
    HeaderTestComponent.prototype.onNameChange = function (model) {
        this.text = model;
        this.textChange.emit(model);
    };
    HeaderTestComponent.prototype.onPriceChange = function (model) {
        this.price = model;
        this.priceChange.emit(model);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HeaderTestComponent.prototype, "text", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], HeaderTestComponent.prototype, "price", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], HeaderTestComponent.prototype, "textChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], HeaderTestComponent.prototype, "priceChange", void 0);
    HeaderTestComponent = __decorate([
        Component({
            selector: 'header-test',
            template: "<div class=\"form-group\">\n            <div class=\"col-md-8\">\n                <input class=\"form-control\" [ngModel]=\"text\" (ngModelChange)=\"onNameChange($event)\" placeholder=\"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-md-6\">\n                <input type=\"number\" class=\"form-control\" [ngModel]=\"price\" (ngModelChange)=\"onPriceChange($event)\" placeholder=\"\u0426\u0435\u043D\u0430\" />\n            </div>\n        </div>"
        })
    ], HeaderTestComponent);
    return HeaderTestComponent;
}());
export { HeaderTestComponent };
//# sourceMappingURL=header.testComponent.js.map