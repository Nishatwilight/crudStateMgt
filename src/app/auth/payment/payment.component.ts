import { Component } from '@angular/core';
import { AuthState, Payment } from '../authState/auth.state';
import { Store } from '@ngrx/store';
import { paymentProcess } from '../authState/auth.actions';
import { getpayment } from '../authState/auth.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  payment$!: Observable<Payment[]>;

  constructor(private store: Store<AuthState>) { }
  ngOnInit() {
    this.store.dispatch(paymentProcess());
    this.payment$ = this.store.select(getpayment)
    console.log(this.payment$);
  }
}
