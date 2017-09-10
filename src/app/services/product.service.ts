import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable()
export class ProductService {

  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  loadProducts() {
    const products = JSON.parse(localStorage.getItem('dataProducts'));
    this.products.next(products);
  }

  getProductById(id: number): Product {
    return this.products.value
      .find((item) => 
        item.id == id
      )
  }

  setProduct(product: Product) {
    const products = this.products.value;

    product.id = this.getNewId();
    products.push(product);

    this.changeProducts(products);
  }

  updateProduct(product: Product) {
    const products = this.products.value;
    const index = products.findIndex(item => item.id == product.id);

    products[index] = product;

    this.changeProducts(products);
  }

  deleteProduct(id: number) {
    const products = this.products.value
      .filter((item) => 
        item.id != id
    );
    
    this.changeProducts(products);
  }

  changeProducts(products: Product[]) {
    localStorage.setItem('dataProducts', JSON.stringify(products));
    this.products.next(products);
  }

  private getNewId(): number {
    const ids = this.products.value
      .map((product) =>
        product.id
      );

    return Math.max(...ids) + 1;
  }
}
