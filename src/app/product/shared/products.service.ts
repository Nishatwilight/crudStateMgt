import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Db, Item } from '../productState/product.state';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(` http://localhost:3000/items`);
  }

}
