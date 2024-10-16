import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct, Root } from '../interfaces/i-product';
import { map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://dummyjson.com/products';

  prodotto$ = new Subject<iProduct>();

  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http
      .get<Root>(this.apiUrl)
      .pipe(map((response: Root) => response.products));
  }

  addToCart(prod: iProduct) {
    this.prodotto$.next(prod);
  }
}
