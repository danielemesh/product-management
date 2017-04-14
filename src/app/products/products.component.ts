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
      .then(products => {
        this.products = products;
        // TODO: remove when done!
        this.onSelectProduct(this.products[0]);
      });
  }

  onSelectProduct(product) {
    console.log(product);
    this.selectedProduct = {...product};
  }
}
