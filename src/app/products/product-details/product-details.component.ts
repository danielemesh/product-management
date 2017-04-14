import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
  moduleId: module.id,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() model: Product;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit!');
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
    else if (control.invalid) {
      classes = {
        wrapper: 'has-error',
        icon: 'glyphicon-remove'
      };
    }

    return classes;
  }

  // TODO: remove this when done!
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
