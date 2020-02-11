import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { LogService } from './app.logservice';

@Injectable()
export class DataService {

    private url = "/api/products";

    constructor(private http: HttpClient, private log: LogService) {
    }

    getProducts() {
        this.log.write("getProducts");
        return this.http.get(this.url);
    }

    updateCreateProduct(product: Product) {
        this.log.write("updateCreateProduct");
        return this.http.post(this.url, product);
    }

    deleteProduct(id: number) {
        this.log.write("deleteProduct");
        return this.http.delete(this.url + '/' + id);
    }
}