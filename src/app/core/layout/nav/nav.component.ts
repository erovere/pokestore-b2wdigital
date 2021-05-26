import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '@app/core/services';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    logoUrl: string;
    pokemonFamily: string;

    constructor(
        private configurationService: ConfigurationService
    ) { }

    ngOnInit(): void {
        const appConfig = this.configurationService.getConfigSync();
        if (appConfig) {
            this.logoUrl = appConfig.logoImageUrl;
            this.pokemonFamily = appConfig.name;
        }
    }
}
