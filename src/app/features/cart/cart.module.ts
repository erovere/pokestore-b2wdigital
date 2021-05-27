
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
    declarations: [CartComponent],
    imports: [SharedModule, CartRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule { }
