import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthState } from '../authState/auth.state';
import { Store } from '@ngrx/store';
import { loinCredentials } from '../authState/auth.actions';
import { logcredential } from '../authState/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  username!: string;
  password!: string;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private store: Store<AuthState>
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
   
  }

  onSubmit() {

    this.store.dispatch(loinCredentials({ username: this.username, password: this.password }));
    const credential$ = this.store.select(logcredential);
    console.log('credential', credential$); 
    console.log(this.loginForm);
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.store.dispatch(loinCredentials({ username: this.username, password: this.password }));

    this.router.navigate(['auth/login/order']);
  }
}
