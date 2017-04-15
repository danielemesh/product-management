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
  sortOrder: 'name';

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  onSortOrderChange() {
    if (this.sortOrder === 'name') {
      this.products.sort(this.compareByName);
    }
    else if (this.sortOrder === 'date') {
      this.products.sort(this.compareByDate);
    }
  }

  private compareByDate(a: Product, b: Product) {
      return a.creationDate.getTime() - b.creationDate.getTime();
  }

  private compareByName(a: Product, b: Product) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();

    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
  }

  getProducts() {
    this.productsService
      .getProducts()
      .then(products => this.products = products);
  }

  onRemoveProduct(id) {
    this.productsService
      .remove(id)
      .then(products => this.products = products);
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = {...product};
  }

  onSubmitProduct(product: Product) {
    this.productsService
      .upsert(product)
      .then(products => {
        this.products = products;
        this.selectedProduct = null;
      });
  }

  onAddProductsBtnClick() {
    this.selectedProduct = new Product();
  }
}
