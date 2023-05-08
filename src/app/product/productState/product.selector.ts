export const productStateName = 'product'
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Db } from './product.state';

export const getProductState = createFeatureSelector<Db>('product');

export const getItems = createSelector(getProductState, (state) => state.items);


