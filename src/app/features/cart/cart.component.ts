import { Component, OnInit } from '@angular/core';
import { AnalyticsService, CartService } from '@app/core/services';
import { Location } from '@angular/common';
import { Product } from '@app/core/models';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseSuccessComponent } from '@app/shared/components/dialogs/purchase-success/purchase-success.component';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    items = this.cartService.getItems();
    totalPrice  = this.cartService.getTotalPrice();    

    constructor(
        private cartService: CartService,
        private location: Location,
        private dialog: MatDialog,
        private analytics: AnalyticsService
    ) {}

    public handleBack = () => this.location.back();

    public getPokemonIdFromURL(url: string): number {
        return Number(url.split('/')[6]);
    }

    public removeFromCart(product: Product) {
        this.cartService.removeFromCart(product);
    }

    public clearCart() {
        this.cartService.clearCart();
    }

    get getTotalPrice(): number {
        this.totalPrice = this.cartService.getTotalPrice();
        return this.totalPrice;
    }

    public completePurchase(): void {
        this.dialog.open(PurchaseSuccessComponent, {
            width: '100%',
            height: '100%',
            disableClose: true,
            panelClass: 'pokestore_dialog_layout',
            data: {
                items: this.items,
                totalPrice: this.getTotalPrice,
                cashback: (((100 / 5) * this.getTotalPrice) / 100)
            }
        });

        this.analytics.pushAction({
            gacategoria: `Modal`,
            garotulo: `Compra de ${this.items.length} itens finalizada.`
        });
    }
}