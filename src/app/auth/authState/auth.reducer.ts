import { createReducer, on } from '@ngrx/store';
import { approveOrder, deleteOrder, loadOrdersSuccess, loinCredentials, loinFailure, loinSuccess, paymentSuccess } from './auth.actions';
import { AuthState, initialState } from './auth.state';

export const authReducer = createReducer(
  initialState,
  on(loinCredentials, (state) => state),
  on(loinSuccess, (state, { username, password }) => ({ ...state, username, password })),
  on(loinFailure, (state, { error }) => ({ ...state, error })),

  on(loadOrdersSuccess, (state, action) => ({
    ...state,
    orders: action.order,
  })),

  on(deleteOrder, (state, { orderId }) => ({
    ...state,
    orders: state.orders.filter(o => o.id !== orderId)
  })),

  on(approveOrder, (state, { order }) => ({
    ...state,
    order: state.orders?.map((o) => (o.id === order.id ? order : o)),
  })),

  on(paymentSuccess, (state, action) => ({
    ...state,
    payment: action.pay,
  })),
);

