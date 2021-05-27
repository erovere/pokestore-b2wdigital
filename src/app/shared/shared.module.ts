import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseSuccessComponent } from './components/dialogs/purchase-success/purchase-success.component';
import * as fromDirectives from './directives';

@NgModule({
  declarations: [
    PurchaseSuccessComponent,
    ...fromDirectives.directives,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    ...fromDirectives.directives,
    PurchaseSuccessComponent
  ],
  entryComponents: [PurchaseSuccessComponent]
})
export class SharedModule {}
