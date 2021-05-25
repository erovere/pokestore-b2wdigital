import { Injectable, isDevMode, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let window: any;


export interface AnalyticsActionEvent {
    event?: string;
    gaacao?: string;
    gacategoria?: string;
    garotulo?: string;
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

    constructor(@Inject(PLATFORM_ID) private platformId: object) {
        if (isPlatformBrowser(this.platformId)) {
            window.dataLayer = window.dataLayer || [];
        }
    }

    private log(data: any): void {
        if (!isDevMode()) {
            window.dataLayer.push(data);
            return;
        }

        console.log('@AnalyticsService -> ', data);
    }

    pushAction(data: AnalyticsActionEvent): void {
        this.log({
            event: 'datalayereventos',
            gaacao: 'Click',
            ...data,
        });
    }

    pushEvent(title: string, description: string): void {
        this.log({
            event: 'GeneralEvent',
            generalEventTitle: title,
            generalEventDescription: description,
        });
    }

    pageView(url: string, title: string): void {
        this.log({
            event: 'VirtualPageview',
            virtualPageURL: url,
            virtualPageTitle: title,
        });
    }

}
