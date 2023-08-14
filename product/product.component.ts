import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products!: Product[];
  loader: boolean = false;
  constructor(private _productsService: ProductsService) {
    this.loader = true;
    this._productsService.getProducts().subscribe((res) => {
      this.products = res.products;
      this.loader = false;
    });
  }
}
