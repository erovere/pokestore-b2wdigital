import { Component, OnInit } from '@angular/core';
import { ConfigurationService, CartService, AnalyticsService} from '@app/core/services';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    logoUrl: string;
    pokemonFamily: string;
    totalItems = this.cartService.getTotalItems();

    constructor(
        private configurationService: ConfigurationService,
        private cartService: CartService,
        private analytics: AnalyticsService
    ) { }

    ngOnInit(): void {
        const appConfig = this.configurationService.getConfigSync();
        if (appConfig) {
            this.logoUrl = appConfig.logoImageUrl;
            this.pokemonFamily = appConfig.name;
        }
    }
    get getTotalItems(): number {
        this.totalItems = this.cartService.getTotalItems();
        return this.totalItems;
    }
}
