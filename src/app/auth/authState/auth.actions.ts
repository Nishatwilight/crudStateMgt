import { createAction, props } from '@ngrx/store';
import { Order } from './auth.state';

//Login
export const loinCredentials = createAction('[login] login', props<{username: string, password: string}>())
export const loinSuccess = createAction('[login] login success', props<{username: string, password: string}>())
export const loinFailure = createAction('[login] login Failure', props<{error: string}>())



//Order
export const loadOrders = createAction('[Order Component] Load Orders');
export const loadOrdersSuccess = createAction('[Order Component] Load Orders Success', props<{ order: any[] }>());
export const loadOrdersFailure = createAction('[Order Component] Load Orders Failure', props<{ error: string }>());

//Order Status
export const approveOrder = createAction('[Order] Approve', props<{ order: Order }>());
export const deleteOrder = createAction('[Order] Delete', props<{ orderId: number }>());

//payment
export const paymentProcess = createAction('[Payment] payment details')
export const paymentSuccess = createAction('[Payment] payment success', props<{pay: any[]}>())
export const paymentFailure = createAction('[Payment] payment failue', props<{ errors: string}>())


