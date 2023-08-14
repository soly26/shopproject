import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Output, Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'https://dummyjson.com/products';

  constructor(public http: HttpClient) {}

  getProducts(): Observable<Output> {
    return this.http.get<Output>(this.url);
  }
}
