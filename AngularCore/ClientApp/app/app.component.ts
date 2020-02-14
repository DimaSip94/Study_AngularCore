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
    deleteProducts(id: number) {
        this.dataService.deleteProduct(id).subscribe(data => this.loadProducts());
    }
}