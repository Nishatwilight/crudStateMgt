//Login Credentials


export interface Login   {
  username: string,
  password: string
}

//Order Details

export interface Order {
  id: number;
  date: string;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  subtotal: number;
  discount: number;
  total: number;
  status: string;
  payment: {
    method: string;
    transactionId: string;
    status: string;
  };
  shipping: {
    name: string;
    address: string;
    phone: string;
    status: string;
    trackingId: string;
  };
} 

//Payment Details

export interface Payment {
  orderId: string;
  paymentMethod: string;
  amount: number;
  status: string;
  transactionId: string;
}

  export interface AuthState {
    orders: Order[];
    error: string   //doubt
    payment: Payment[];
    credentials:  Login[];


  }

  export const initialState: AuthState = {
    orders: [],
    error: '',
    payment: [],
    credentials: [],
  }; 




