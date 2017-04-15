import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Output() select = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  removeProduct(id) {
    this.products = this.products.filter(product => product.id !== id);
  }

  selectProduct(product) {
    this.select.emit(product);
  }

}
