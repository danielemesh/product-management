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
  @Output() remove = new EventEmitter<number>();

  activeProductId: number = null;

  constructor() { }

  ngOnInit() {
  }

  removeProduct(id) {
    this.remove.emit(id);
  }

  selectProduct(product) {
    this.activeProductId = product.id;
    this.select.emit(product);
  }

}
