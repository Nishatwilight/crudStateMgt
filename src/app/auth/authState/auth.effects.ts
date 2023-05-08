import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { 
  loinCredentials, 
  loinFailure, 
  loinSuccess, 
  loadOrders, 
  loadOrdersFailure, 
  loadOrdersSuccess, 
  paymentFailure, 
  paymentProcess, 
  paymentSuccess 
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loinCredentials),
    switchMap(({ username, password }) => {
      return this.authService.login({ username, password }).pipe(
        mergeMap((users) => {
          const user = users.find((u: any) => u.username === username && u.password === password);
          if (user) {
            return of(loinSuccess({ username, password }));
          } else {
            return of(loinFailure({ error: 'Invalid username or password' }));
          }
        }),
      );
    }),
  ),
);

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),
      mergeMap(() =>
        this.authService.orders().pipe(
          map((order) => loadOrdersSuccess({ order })),
          catchError((error) => of(loadOrdersFailure({ error }))),
        ),
      ),
    ),
  );

  payment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(paymentProcess),
      mergeMap(() =>
        this.authService.payment().pipe(
          map((pay) => paymentSuccess({ pay })),
          catchError((errors) => of(paymentFailure({ errors }))),
        ),
      ),
    ),
  );
}


