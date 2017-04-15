import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocalStorageModule, ILocalStorageServiceConfig } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';

const localStorageConfig: ILocalStorageServiceConfig = {
  prefix: 'product-manager',
  storageType: 'localStorage'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LocalStorageModule.withConfig(localStorageConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
