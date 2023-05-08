import { Component, OnInit } from '@angular/core';
import { Db, Item } from '../productState/product.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  loadItems, deleteItem } from '../productState/product.actions';
import { getItems } from '../productState/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product$!: Observable<Item[]>; // Update the type of product$ to Observable<Item[]>

  constructor(private store: Store<Db>) {}
 
  ngOnInit() {
    this.store.dispatch(loadItems());
    this.product$ = this.store.select(getItems);
    console.log(this.product$ );
  }
  
  
  onsubmitting() {
    this.store.dispatch(loadItems());
    this.product$ = this.store.select(getItems);
    this.product$.subscribe(products => console.log(products));
  }

  editItem(value: any){}

  deleteItem(item: Item) {
    console.log(item.id);
    this.store.dispatch(deleteItem({id: item.id}));
  }

  addItem(){}
  resetItems(){
    
  }

}


