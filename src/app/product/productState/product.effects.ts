import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from '../shared/products.service';
import { loadItems, loadItemsFailure, loadItemsSuccess } from './product.actions';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions, private productService: ProductsService) {}

  loadItems$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadItems),
    mergeMap(() =>
      this.productService.getData().pipe(
        map((items) => {
          console.log('items:==================>', items);
          return loadItemsSuccess({ items }); //came from action
        }),
        catchError((error) => of(loadItemsFailure({ error })))
      )
    )
  )
);

}
