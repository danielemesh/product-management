import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { Products, getNextProductId } from './mock-products';


@Injectable()
export class ProductsService {

  constructor() {
  }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(Products);
  }

  create(newProduct: Product): Promise<Product> {
    newProduct.id = getNextProductId();
    newProduct.creationDate = new Date();

    return Promise.resolve(newProduct);
  }
}
