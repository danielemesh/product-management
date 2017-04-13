import { Component } from '@angular/core';

import { ProductsService } from './products/shared/products.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService]
})
export class AppComponent {
  title = 'My Store';
}
