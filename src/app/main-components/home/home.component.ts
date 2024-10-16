import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { iProduct } from '../../interfaces/i-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productSvc: ProductService) {}

  product!: iProduct[];
  preferiti: iProduct[] = [];

  ngOnInit() {
    this.productSvc.getAllProduct().subscribe((prod) => {
      this.product = prod;
      console.log(this.product);
    });
  }
  save(prod: iProduct) {
    this.productSvc.addToCart(prod);
  }
}
