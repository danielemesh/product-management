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
  filteredProducts: Product[];
  selectedProduct: Product;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this
      .getProducts()
      .then(() => this.onSortOrderChange('name'));

  }

  onSearchKeyup(search: string) {
    if (!search) {
      this.assignProducts(this.products);
      return;
    }

    const regex = new RegExp(search, 'gi');

    this.filteredProducts = this.products.filter(product => {
      if (product.name.search(regex) !== -1 || product.description.search(regex) !== -1) {
        return product;
      }
    });
  }

  onSortOrderChange(sortOrder) {
    if (sortOrder === 'name') {
      this.filteredProducts.sort(this.compareByName);
    }
    else if (sortOrder === 'date') {
      this.filteredProducts.sort(this.compareByDate);
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

  private assignProducts(products: Product[]) {
    this.products = products;
    this.filteredProducts = [...products];
  }

  getProducts() {
    return this.productsService
      .getProducts()
      .then(products => this.assignProducts(products));
  }

  onRemoveProduct(id) {
    this.productsService
      .remove(id)
      .then(products => this.assignProducts(products));
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = {...product};
  }

  onSubmitProduct(product: Product) {
    this.productsService
      .upsert(product)
      .then(products => {
        this.assignProducts(products);
        this.selectedProduct = null;
      });
  }

  onAddProductsBtnClick() {
    this.selectedProduct = new Product();
  }
}
