import { Component, OnInit } from '@angular/core';

import { Product } from './shared/product.model';
import { ProductsService } from './shared/products.service';


@Component({
  moduleId   : module.id,
  selector   : 'app-products',
  templateUrl: './products.component.html',
  styleUrls  : ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService
      .getProducts()
      .then(products => this.products = products);
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = { ...product };
  }

  onSubmitProduct(product: Product) {
    this.products = this.products.map(p => {
      if (p.id !== product.id) {
        return p;
      }
      return { ...p, ...product };
    });
  }
}
