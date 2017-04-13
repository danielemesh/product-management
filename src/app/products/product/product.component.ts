import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
