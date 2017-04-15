import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { Products, getNextProductId } from './mock-products';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()
export class ProductsService {

  /**
   * localStorage key to set and get items.
   * @type {string}
   */
  private key = 'products';
  private products: Product[];

  constructor(private localStorageService: LocalStorageService) {
  }

  getProducts(): Promise<Product[]> {
    let products: Product[];

    if (this.products) {
      products = this.products;
    }
    else {
      products = this.getStorage();

      // Set localStorage only once
      if (!products || !products.length) {
        products = Products;
        this.setStorage(products);
      }
    }

    return Promise.resolve(products);
  }

  upsert(productToUpsert: Product): Promise<Product[]> {
    // Search the product in the products array to determine update / insert
    const index = this.products.findIndex(p => p.id === productToUpsert.id);

    // Update
    if (index !== -1) {
      this.products[index] = productToUpsert;
    }
    // Insert
    else {
      productToUpsert = this.createProduct(productToUpsert);
      this.products.push(productToUpsert);
    }

    this.setStorage(this.products);

    return Promise.resolve(this.products);
  }

  private createProduct(newProduct: Product): Product {
    return {
      ...newProduct,
      id          : getNextProductId(),
      creationDate: new Date()
    };
  }

  remove(productId: number): Promise<Product[]> {
    return Promise.resolve(this.removeFromStorage(productId));
  }

  /* localStorage helper functions
   ================================== */
  /**
   * Gets the products array from localStorage
   * @returns {Product[]}
   */
  private getStorage(): any {
    return this.localStorageService.get(this.key);
  }

  /**
   * Sets the products array in localStorage
   * @param value
   * @returns {boolean}
   */
  private setStorage(value: Product[]) {
    return this.localStorageService.set(this.key, value);
  }

  /**
   * Removes a product from the products array in localStorage
   * @param productId
   * @returns {Promise<Product[]>} a promise with the new products array
   */
  private removeFromStorage(productId: number): Promise<Product[]> {
    // Remove the product
    this.products = this.products.filter(p => p.id !== productId);

    // Update the localStorage
    this.setStorage(this.products);

    return Promise.resolve(this.products);
  }

  init() {
    this
      .getProducts()
      .then(products => this.products = products);
  }
}
