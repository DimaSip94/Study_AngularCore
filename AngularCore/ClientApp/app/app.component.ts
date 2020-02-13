import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/data.productService';
import { Product } from './products/product';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [ProductService]
})
export class AppComponent implements OnInit {

    products: Product[] = [];                // массив товаров
    constructor(private dataService: ProductService) { }

    ngOnInit() {
        this.loadProducts();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadProducts() {
        this.dataService.getProducts()
            .subscribe(data => this.products = data);
    }
    //// сохранение данных
    //save() {
    //    this.dataService.updateCreateProduct(this.product)
    //        .subscribe(data => this.loadProducts());
    //    this.cancel();
    //}
    //editProduct(p: Product) {
    //    this.product = p;
    //}
    //cancel() {
    //    this.product = new Product();
    //    this.tableMode = true;
    //}
    //delete(p: Product) {
    //    this.dataService.deleteProduct(p.ProductID)
    //        .subscribe(data => this.loadProducts());
    //}
    //add() {
    //    this.cancel();
    //    this.tableMode = false;
    //}
}