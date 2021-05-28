import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from '@app/core/models';
import { CartService, AnalyticsService} from '@app/core/services';
import { PurchaseSuccessComponent } from '@app/shared/components/dialogs/purchase-success/purchase-success.component';

@Component({
    selector: 'app-cart-sidebar',
    templateUrl: './cart-sidebar.component.html',
    styleUrls: ['./cart-sidebar.component.scss'],
})
export class CartSidebarComponent {
    screenHeight: number;
    screenWidth: number;
    items = this.cartService.getItems();
    totalItems = this.cartService.getTotalItems();
    totalPrice  = this.cartService.getTotalPrice();   
    cartVisibility = this.cartService.getCartVisibility();

    constructor(
        private cartService: CartService,
        private analytics: AnalyticsService,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.onResize();
     }

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }

    get getCartVisibility(): boolean {        
        if (this.screenWidth < 700){
            this.cartVisibility = this.cartService.getCartVisibility();
            return this.cartVisibility;
        } else {
            if(this.router.url === '/cart'){
                return false;
            } else {
                return true;
            }
        }
    }
    public removeFromCart(product: Product) {
        this.cartService.removeFromCart(product);
    }

    public clearCart() {
        this.cartService.clearCart();
    }

    get getTotalItems(): number {
        this.totalItems = this.cartService.getTotalItems();
        return this.totalItems;
    }

    get getTotalPrice(): number {
        this.totalPrice = this.cartService.getTotalPrice();
        return this.totalPrice;
    }

    public toggleCartVisibility() {
        this.cartService.toggleCartVisibility();
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
