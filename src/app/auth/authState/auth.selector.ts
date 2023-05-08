export const authStateName = 'auth'

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState,  } from './auth.state';

export const getAuthState = createFeatureSelector<AuthState>('auth');
export const logcredential = createSelector(getAuthState, (state)=>state.credentials )
export const getOrders = createSelector(getAuthState, (state) => state.orders);
export const getpayment = createSelector(getAuthState, (state) => state.payment)
