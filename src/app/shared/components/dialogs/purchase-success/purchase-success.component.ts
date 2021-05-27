import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from '@app/core/models';
import { AnalyticsService, CartService } from '@app/core/services';

@Component({
    selector: 'app-purchase-success',
    templateUrl: './purchase-success.component.html',
    styleUrls: ['./purchase-success.component.scss']
})
export class PurchaseSuccessComponent implements OnInit {

    public items: Product[] = [];
    public totalPrice: number;
    public cashback: number;

    constructor(
        public router: Router,
        public dialog: MatDialog,
        private cartService: CartService,
        private analytics: AnalyticsService,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        this.items = this.data.items,
        this.totalPrice = this.data.totalPrice,
        this.cashback = this.data.cashback  
    }
    clearCart(): void {
        this.dialog.closeAll();
        this.cartService.clearCart();
        this.router.navigateByUrl('/');
        this.analytics.pushAction({
            gacategoria: `Modal`,
            garotulo: `Fechamento da Modal de sucesso de compra.`
        });
    }
}
