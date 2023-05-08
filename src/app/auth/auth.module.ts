import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, } from '@ngrx/store';
import { authStateName} from './authState/auth.selector';
import { authReducer } from './authState/auth.reducer';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { AuthEffects } from './authState/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    LoginComponent,
    OrderComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(authStateName, authReducer),
    HttpClientModule,
    EffectsModule.forFeature([AuthEffects])

  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }


