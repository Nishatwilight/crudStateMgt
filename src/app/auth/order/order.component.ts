import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState, Order } from '../authState/auth.state';
import { approveOrder, deleteOrder, loadOrders, loadOrdersFailure, paymentProcess } from '../authState/auth.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { getOrders, getpayment } from '../authState/auth.selector';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders$: Observable<Order[]> | undefined;
  selectedOrder: Order | undefined;
  error$!: Observable<any>;

  constructor(private store: Store<AuthState>,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadOrders());
    this.orders$ = this.store.select(getOrders);
    console.log(this.orders$);


 
    


    //Handling Errors
    // this.store.dispatch(loadOrdersFailure({error: new Error('error in API')}));
    // this.error$ = this.store.select(errororders);
    // this.error$.subscribe(error => {
    //   if (error) {
    //     console.error('Error loading orders ===>:', error);
    //   }
    // });
  }
  


  approveOrder(order: Order) {
    alert("Are you sure, you want to proceed payment")
    const id = order.id
    this.router.navigate([`login/order/payment/${id}`])
  }

  rejectOrder(order: Order) {
    this.store.dispatch(deleteOrder({ orderId: order.id }));
    
  }
}
