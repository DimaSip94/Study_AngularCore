import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
    selector: 'header-test',
    template: `<div class="form-group">
            <div class="col-md-8">
                <input class="form-control" [ngModel]="text" (ngModelChange)="onNameChange($event)" placeholder="Название" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6">
                <input type="number" class="form-control" [ngModel]="price" (ngModelChange)="onPriceChange($event)" placeholder="Цена" />
            </div>
        </div>`
})
export class HeaderTestComponent {
    @Input() text: string;
    @Input() price: number;
    @Output() textChange = new EventEmitter<string>();
    @Output() priceChange = new EventEmitter<number>();
    onNameChange(model: string) {
        this.text = model;
        this.textChange.emit(model);
    }
    onPriceChange(model: number) {
        this.price = model;
        this.priceChange.emit(model);
    }
}