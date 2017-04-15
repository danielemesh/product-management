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

  onRemoveProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = { ...product };
  }

  onSubmitProduct(product: Product) {
    // Search the product in the products array
    const index = this.products.findIndex(p => p.id === product.id);

    // Update product
    if (index !== -1) {
      this.products[index] = product;
    }
    // Create new product
    else {
      this.productsService
        .create(product)
        .then(newProduct => this.products.push(newProduct));
    }

    this.selectedProduct = null;
  }

  addProduct() {
    this.selectedProduct = new Product();
  }
}
