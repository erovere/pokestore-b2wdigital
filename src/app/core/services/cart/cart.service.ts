import { UtilService } from '@app/core/services/utils/util.service';
import { Injectable } from '@angular/core';
import { Product } from '@app/core/models';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: Product[] = [];

    constructor(
        private utilService: UtilService
    ) { 
        this.items = this.utilService.getCart() || [];
    }

    addToCart(product: Product) {
        const found = this.items.findIndex(item => item.name === product.name);
        if(found === -1){
            var amount = {amount: 1}
            product = {
                ...product, 
                ...amount
            }            
            this.items.push(product);
            this.utilService.setCart(this.items);
            return;
        }
        this.items[found].amount = this.items[found].amount + 1;
        this.utilService.setCart(this.items);
    }

    getItems() {
        return this.items;
    }

    removeFromCart(product: Product) {
        const selectedItem = this.items.findIndex(item => item.name === product.name);

        if(this.items[selectedItem].amount > 1){
            this.items[selectedItem].amount = this.items[selectedItem].amount - 1;
        } else{
            this.items.splice(selectedItem, 1);
        }
        this.utilService.setCart(this.items);
    }

    clearCart() {
        this.items.splice(0);
        this.utilService.setCart(this.items);
        return this.items;
    }
}