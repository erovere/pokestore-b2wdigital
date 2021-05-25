import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '@app/core/services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    features: string[];
    logoUrl: string;
    pokemonFamily: string;

    constructor(
        private configurationService: ConfigurationService,
        private readonly router: Router
    ) { }

    ngOnInit(): void {
        const appConfig = this.configurationService.getConfigSync();
        if (appConfig) {
            this.features = appConfig.features;
            this.logoUrl = appConfig.logoImageUrl;
            this.pokemonFamily = appConfig.name;
        }

        // this.router.events.subscribe(() => {
        // });
    }

    isFeatureEnabled(key: string): boolean {
        return !!this.features && this.features.includes(key);
    }
}
