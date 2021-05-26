import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [StoreComponent],
    imports: [SharedModule, StoreRoutingModule, MatButtonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StoreModule { }
