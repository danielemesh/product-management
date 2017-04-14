import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
  moduleId: module.id,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() selectedProduct: Product;

  constructor() { }

  ngOnInit() {
  }

}
