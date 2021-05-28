import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { ConfigurationService, CartService, AnalyticsService} from '@app/core/services';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    logoUrl: string;
    pokemonFamily: string;
    screenHeight: number;
    screenWidth: number;
    totalItems = this.cartService.getTotalItems();

    constructor(
        private configurationService: ConfigurationService,
        private cartService: CartService,
        private analytics: AnalyticsService,
        private router: Router
    ) { 
        this.onResize();
    }

    ngOnInit(): void {
        const appConfig = this.configurationService.getConfigSync();
        if (appConfig) {
            this.logoUrl = appConfig.logoImageUrl;
            this.pokemonFamily = appConfig.name;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }

    toggleCart(){
        if (this.screenWidth < 700){
            this.cartService.toggleCartVisibility();
        } else {
            this.router.navigateByUrl('cart', { replaceUrl: true });
        }
    }

    get getTotalItems(): number {
        this.totalItems = this.cartService.getTotalItems();
        return this.totalItems;
    }
}
