import { authReducer } from "../auth/authState/auth.reducer";
import { Login, Order, Payment } from "../auth/authState/auth.state";
import { productReducer } from "../product/productState/product.reducer";
import { Item } from "../product/productState/product.state";

export interface AppState{
    order: Order;
    payment: Payment;
    error: string;
    credentials: Login;
    ProductState: Item
}
export const appReducer ={
    auth: authReducer,
    product: productReducer
}