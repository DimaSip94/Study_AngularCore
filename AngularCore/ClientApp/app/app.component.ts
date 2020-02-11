﻿import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './app.logservice';
import { Product } from './product';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService, LogService]
})
export class AppComponent implements OnInit {

    product: Product = new Product();   // изменяемый товар
    products: Product[];                // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadProducts();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: Product[]) => this.products = data);
    }
    // сохранение данных
    save() {
        this.dataService.updateCreateProduct(this.product)
            .subscribe(data => this.loadProducts());
        this.cancel();
    }
    editProduct(p: Product) {
        this.product = p;
    }
    cancel() {
        this.product = new Product();
        this.tableMode = true;
    }
    delete(p: Product) {
        this.dataService.deleteProduct(p.ProductID)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}