import { Action, createReducer, on } from '@ngrx/store';
import { deleteItem, loadItems, loadItemsFailure, loadItemsSuccess } from './product.actions';
import { Db, productInitialState } from './product.state';


export const productReducer = createReducer(
  productInitialState,
  on(loadItems, (state) => state),
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items: [...items] })), // !st items came from action
  on(loadItemsFailure, (state, { error }) => ({ ...state, error })),
  on(deleteItem, (state, { id }) => ({
    ...state, 
    items: state.items.filter((f: any) => f.id !== id)
  }))
);


export function reducer(state: Db, action: Action) {
  return productReducer(state, action);
}
