import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { Products } from './mock-products';


@Injectable()
export class ProductsService {

  constructor() {
  }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(Products);
  }
}
