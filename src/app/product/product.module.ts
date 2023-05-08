import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './productState/product.reducer';
import { productStateName } from './productState/product.selector';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './productState/product.effects';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(productStateName, productReducer),
    HttpClientModule,
    EffectsModule.forFeature([ItemEffects])


  ]
})
export class ProductModule { }
