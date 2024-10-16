import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { iProduct } from '../interfaces/i-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private productSvc: ProductService) {}
  preferiti: iProduct[] = [];

  ngOnInit() {
    this.productSvc.prodotto$.subscribe((prod) => {
      this.preferiti.push(prod);
      console.log(this.preferiti);
    });
  }
}
