import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

    private url = "/api/products";

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.url).pipe(map(data => {
            let productList = data["items"];
            return productList.map(function (product: any) {
                return { productID: product.productID, name: product.name, description: product.description, price: product.price };
            });
        }));
    }

    getProduct(id: number) {
        return this.http.get(this.url+'/'+id);
    }

    updateCreateProduct(product: Product) {
        return this.http.post(this.url, product);
    }

    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}