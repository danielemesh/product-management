import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
