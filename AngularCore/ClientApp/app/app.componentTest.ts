import { Component } from '@angular/core';
import { ItemTest } from './ItemTest';
@Component({
    selector: 'test-app',
    templateUrl: './app.componentTest.html'
})
export class AppComponentTest {
    text: string;
    price: number = 0;
     
    items: ItemTest[] = 
    [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];
    addItem(text: string, price: number): void {
         
        if(text==null || text.trim()=="" || price==null)
            return;
        this.items.push(new ItemTest(text, price));
    }
}