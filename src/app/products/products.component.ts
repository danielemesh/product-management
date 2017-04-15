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
    // Temporary workaround for ngSubmit firing twice bug
    if (product instanceof Event) {
      return;
    }

    const originProductIndex = this.products.findIndex(p => p.id === product.id);

    if (originProductIndex !== -1) {
      this.products[originProductIndex] = product;
    }
    else {
      this.productsService.create(product).then(newProduct => {
        this.products.push(newProduct);
      });
    }
  }

  addProduct() {
    this.selectedProduct = new Product();
  }
}
