import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfiguration } from './core/services/configuration/configuration';
import { ConfigurationService, ThemingService, UtilService } from './core/services';
import hostTenantMap from './core/services/configuration/host-to-tenant-map';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
        private utilService: UtilService,
        private themingService: ThemingService,
        private configurationService: ConfigurationService
    ) { }
    
    tenantId: string;
    isLoadingConfiguration: boolean;

    ngOnInit(): void {
        this.whoami();
        this.configureApplication();
    }

    private configureApplication(): void {
        this.isLoadingConfiguration = true;
        this.configurationService.disableCache();
        // this.configurationService.enableCache();

        this.loadConfiguration().subscribe((data: any) => {
            this.themingService.setCSSVariables(data[this.tenantId].theme);
            this.isLoadingConfiguration = false;
        });
    }

    private loadConfiguration(): Observable<AppConfiguration> {
        this.configurationService.tenantId = this.tenantId;
        return this.configurationService.getConfig();
    }

    private whoami(): void {
        const url = new URL(window.location.href);
        this.tenantId = hostTenantMap[url.host];
    }
}
