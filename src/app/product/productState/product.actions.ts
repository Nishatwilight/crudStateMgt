import { createAction, props } from '@ngrx/store';
import { Db, Item } from './product.state';

export const loadItems = createAction('[Items] Load Items');
export const loadItemsSuccess = createAction('[Items] Load Items Success', props<{ items: Item[] }>());
export const loadItemsFailure = createAction('[Items] Load Items Failure', props<{ error: any }>());

export const deleteItem = createAction('Delete Items', props<{id: string}>())


