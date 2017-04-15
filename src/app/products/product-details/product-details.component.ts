import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
  moduleId: module.id,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() model: Product;
  @Output() submit = new EventEmitter<Product>();

  constructor() {

  }

  ngOnInit() { }

  onSubmit() {
    this.submit.emit(this.model);
  }

  setControlClass(control): any {
    let classes = {
      wrapper: '',
      icon: ''
    };

    if (control.valid && control.touched) {
      classes = {
        wrapper: 'has-success',
        icon: 'glyphicon-ok'
      };
    }
    else if (control.invalid && control.touched) {
      classes = {
        wrapper: 'has-error',
        icon: 'glyphicon-remove'
      };
    }

    return classes;
  }
}
