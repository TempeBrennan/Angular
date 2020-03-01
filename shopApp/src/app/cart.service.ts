import { Injectable } from "@angular/core";
import { products } from './products';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items = [];

    constructor() { }

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}